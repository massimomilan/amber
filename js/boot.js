/* ====================================================================
   |
   |   Amber Smalltalk
   |   http://amber-lang.net
   |
   ======================================================================

   ======================================================================
   |
   | Copyright (c) 2010-2011
   | Nicolas Petton <petton.nicolas@gmail.com>
   |
   | Amber is released under the MIT license
   |
   | Permission is hereby granted, free of charge, to any person obtaining
   | a copy of this software and associated documentation files (the
   | 'Software'), to deal in the Software without restriction, including
   | without limitation the rights to use, copy, modify, merge, publish,
   | distribute, sublicense, and/or sell copies of the Software, and to
   | permit persons to whom the Software is furnished to do so, subject to
   | the following conditions:
   |
   | The above copyright notice and this permission notice shall be
   | included in all copies or substantial portions of the Software.
   |
   | THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
   | EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
   | MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
   | IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
   | CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
   | TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
   | SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   |
   ==================================================================== */

/* Make sure that console is defined */

if(typeof console === "undefined") {
	this.console = {
		log: function() {},
		warn: function() {},
		info: function() {},
		debug: function() {},
		error: function() {}
	};
}

/* Global Smalltalk objects. */
// The globals below all begin with `global_' prefix.
// This prefix is to advice developers to avoid their usage,
// instead using local versions smalltalk, nil, _st that are
// provided by appropriate wrappers to each package.
// The plan is to use different module loader (and slightly change the wrappers)
// so that these globals are hidden completely inside the exports/imports of the module loader.
// DO NOT USE DIRECTLY! CAN DISAPPEAR AT ANY TIME.
var global_smalltalk, global_nil, global__st;

(function () {

/* Reconfigurable micro composition system, https://github.com/herby/brikz */

function Brikz(api) {
	var brikz = this, backup = {};

	function mixin(s, t, k) {
		for (k=k||Object.keys(s), l=k.length, i=0; i<l; ++i) t[k[i]]=s[k[i]];
		return t;
	}

	Object.defineProperties(this, {
		ensure: { value: null,
			enumerable: false, configurable: true, writable: true},
		rebuild: { value: function () {
			var oapi = mixin(api, {}), obrikz = mixin(backup, {});
			mixin({}, api, Object.keys(api)); backup = {};
			brikz.ensure = function (key) {
				var b = brikz[key], bak = [];
				while (typeof b === "function") b = new b(brikz, api, bak);
				if (b === bak) { b = obrikz[key]; mixin(oapi, api, bak); }
				return brikz[key] = backup[key] = b;
			}
			Object.keys(brikz).forEach(function (key) { brikz.ensure(key); });
			brikz.ensure = null;
		}, enumerable: false, configurable: true, writable: false }});
}

/* Brikz end */

function inherits(child, parent) {
	child.prototype = Object.create(parent.prototype, {
		constructor: { value: child,
			enumerable: false, configurable: true, writable: true }
	});
}

/* Smalltalk foundational objects */

function SmalltalkObject() {}
function SmalltalkNil() {}
inherits(SmalltalkNil, SmalltalkObject);

function Smalltalk() {}
inherits(Smalltalk, SmalltalkObject);

var nil = new SmalltalkNil();
var api = new Smalltalk;
var brikz = new Brikz(api);

function OrganizeBrik(brikz, st) {
	var org = this;

	org.Organizer = function () {};
	inherits(org.Organizer, SmalltalkObject);

	org.PackageOrganizer = function () {
		this.elements = [];
	};
	inherits(org.PackageOrganizer, org.Organizer);

	org.ClassOrganizer = function () {
		this.elements = [];
	};
	inherits(org.ClassOrganizer, org.Organizer);

	org.setupClassOrganization = function (klass) {
		klass.organization = new org.ClassOrganizer;
		klass.organization.theClass = klass;
	};

	org.setupPackageOrganization = function (pkg) {
		pkg.organization = new org.PackageOrganizer;
	};

	org.addOrganizationElement = function (owner, element) {
		owner.organization.elements.addElement(element);
	};

	org.removeOrganizationElement = function (owner, element) {
		owner.organization.elements.removeElement(element);
	};
}

function DNUBrik(brikz, st) {

	/* Method not implemented handlers */

	brikz.ensure("selectorConversion");
	brikz.ensure("messageSend");

	this.methods = [];
	this.selectors = [];

	this.get = function (string) {
		var index = this.selectors.indexOf(string);
		if(index !== -1) {
			return this.methods[index];
		}
		this.selectors.push(string);
		var selector = st.selector(string);
		var method = {jsSelector: selector, fn: this.createHandler(selector)};
		this.methods.push(method);
		return method;
	};

	/* Dnu handler method */

	this.createHandler = function (selector) {
		var handler = function() {
			var args = Array.prototype.slice.call(arguments);
			return brikz.messageSend.messageNotUnderstood(this, selector, args);
		};

		return handler;
	}
}

function ClassInitBrik(brikz, st) {

	var dnu = brikz.ensure("dnu");
	var manip = brikz.ensure("manipulation");

	/* Initialize a class in its class hierarchy. Handle both classes and
	 metaclasses. */

	st.init = function(klass) {
		st.initClass(klass);
		if(klass.klass && !klass.meta) {
			st.initClass(klass.klass);
		}
	};

	st.initClass = function(klass) {
		if(klass.wrapped) {
			klass.inheritedMethods = {};
			copySuperclass(klass);
		} else {
			installSuperclass(klass);
		}

		if(klass === st.Object || klass.wrapped) {
			installDnuHandlers(klass);
		}
	};

	function installSuperclass(klass) {
		// only if the klass has not been initialized yet.
		if(klass.fn.prototype._yourself) { return; }

		if(klass.superclass && klass.superclass !== nil) {
			inherits(klass.fn, klass.superclass.fn);
			manip.wireKlass(klass);
			manip.reinstallMethods(klass);
		}
	}

	function copySuperclass(klass, superclass) {
		for (superclass = superclass || klass.superclass;
			 superclass && superclass !== nil;
			 superclass = superclass.superclass) {
			for (var keys = Object.keys(superclass.methods), i = 0; i < keys.length; i++) {
				inheritMethodIfAbsent(superclass.methods[keys[i]], klass);
			}
		}
	}

	function inheritMethodIfAbsent(method, klass) {
		var selector = method.selector;

		if(klass.methods.hasOwnProperty(selector) || klass.inheritedMethods.hasOwnProperty(selector)) {
			return;
		}

		manip.installMethod(method, klass);
		klass.inheritedMethods[method.selector] = true;
	}

	function installDnuHandlers(klass) {
		var m = dnu.methods;
		for(var i=0; i<m.length; i++) {
			manip.installMethodIfAbsent(m[i], klass);
		}
	}
}

function ManipulationBrik(brikz, st) {

	var manip = this;

	manip.installMethodIfAbsent = function (handler, klass) {
		var jsFunction = klass.fn.prototype[handler.jsSelector];
		if(!jsFunction) {
			manip.installMethod(handler, klass);
		}
	};

	manip.installMethod = function (method, klass) {
		Object.defineProperty(klass.fn.prototype, method.jsSelector, {
			value: method.fn,
			enumerable: false, configurable: true, writable: true
		});
	};

	manip.wireKlass = function (klass) {
		Object.defineProperty(klass.fn.prototype, "klass", {
			value: klass,
			enumerable: false, configurable: true, writable: true
		});
	};

	manip.reinstallMethods = function (klass) {
		for(var keys = Object.keys(klass.methods), i=0; i<keys.length; i++) {
			manip.installMethod(klass.methods[keys[i]], klass);
		}
	};
}

function ClassesBrik(brikz, st) {

	var org = brikz.ensure("organize");
	var manip = brikz.ensure("manipulation");

	function SmalltalkPackage() {}
	function SmalltalkBehavior() {}
	function SmalltalkClass() {}
	function SmalltalkMetaclass() {
		this.meta = true;
	}

	inherits(SmalltalkPackage, SmalltalkObject);
	inherits(SmalltalkBehavior, SmalltalkObject);
	inherits(SmalltalkClass, SmalltalkBehavior);
	inherits(SmalltalkMetaclass, SmalltalkBehavior);

	this.Package = SmalltalkPackage;
	this.Behavior = SmalltalkBehavior;
	this.Class = SmalltalkClass;
	this.Metaclass = SmalltalkMetaclass;

	/* Smalltalk classes */

	var classes = [];
	var wrappedClasses = [];

	/* We hold all Packages in a separate Object */

	st.packages = {};

	/* Smalltalk package creation. To add a Package, use smalltalk.addPackage() */

	function pkg(spec) {
		var that = new SmalltalkPackage();
		that.pkgName = spec.pkgName;
		org.setupPackageOrganization(that);
		that.properties = spec.properties || {};
		return that;
	}

	/* Smalltalk class creation. A class is an instance of an automatically
		created metaclass object. Newly created classes (not their metaclass)
		should be added to the smalltalk object, see smalltalk.addClass().
		Superclass linking is *not* handled here, see smalltalk.init()  */

	function klass(spec) {
		spec = spec || {};
		var meta = metaclass(spec);
		var that = meta.instanceClass;
		that.fn = spec.fn || function() {};
		setupClass(that, spec);

		that.className = spec.className;
		that.wrapped   = spec.wrapped || false;
		meta.className = spec.className + ' class';
		if(spec.superclass) {
			that.superclass = spec.superclass;
			meta.superclass = spec.superclass.klass;
		}
		return that;
	}

	function metaclass(spec) {
		spec = spec || {};
		var that = new SmalltalkMetaclass();
		inherits(
			that.fn = function() {},
			spec.superclass ? spec.superclass.klass.fn : SmalltalkClass
		);
		that.instanceClass = new that.fn();
		setupClass(that);
		return that;
	}

	function setupClass(klass, spec) {
		spec = spec || {};
		klass.iVarNames = spec.iVarNames || [];
		klass.pkg = spec.pkg;

		Object.defineProperty(klass, "toString", {
			value: function() { return 'Smalltalk ' + this.className; },
			enumerable:false, configurable: true, writable: false
		});
		org.setupClassOrganization(klass);
		Object.defineProperty(klass, "methods", {
			value: {},
			enumerable: false, configurable: true, writable: true
		});
		manip.wireKlass(klass);
	}

	/* Add a package to the smalltalk.packages object, creating a new one if needed.
	 If pkgName is null or empty we return nil, which is an allowed package for a class.
	 If package already exists we still update the properties of it. */

	st.addPackage = function(pkgName, properties) {
		if(!pkgName) {return nil;}
		if(!(st.packages[pkgName])) {
			st.packages[pkgName] = pkg({
				pkgName: pkgName,
				properties: properties
			});
		} else {
			if(properties) {
				st.packages[pkgName].properties = properties;
			}
		}
		return st.packages[pkgName];
	};

	/* Add a class to the smalltalk object, creating a new one if needed.
	 A Package is lazily created if it does not exist with given name. */

	st.addClass = function(className, superclass, iVarNames, pkgName) {
		var pkg = st.addPackage(pkgName);
		if (superclass == nil) { superclass = null; }
		if(st[className] && st[className].superclass == superclass) {
			st[className].superclass = superclass;
			st[className].iVarNames = iVarNames;
			st[className].pkg = pkg || st[className].pkg;
		} else {
			if(st[className]) {
				st.removeClass(st[className]);
			}
			st[className] = klass({
				className: className,
				superclass: superclass,
				pkg: pkg,
				iVarNames: iVarNames
			});
		}

		classes.addElement(st[className]);
		org.addOrganizationElement(pkg, st[className]);
	};

	st.removeClass = function(klass) {
		org.removeOrganizationElement(klass.pkg, klass);
		classes.removeElement(klass);
		delete st[klass.className];
	};

	/* Create a new class wrapping a JavaScript constructor, and add it to the
	 global smalltalk object. Package is lazily created if it does not exist with given name. */

	st.wrapClassName = function(className, pkgName, fn, superclass, wrapped) {
		if(wrapped !== false) {
			wrapped = true;
		}
		var pkg = st.addPackage(pkgName);
		st[className] = klass({
			className:  className,
			superclass: superclass,
			pkg:        pkg,
			fn:         fn,
			wrapped:    wrapped
		});

		classes.addElement(st[className]);
		if(wrapped) {
			wrappedClasses.addElement(st[className]);
		}
		org.addOrganizationElement(pkg, st[className]);
	};

	/* Create an alias for an existing class */

	st.alias = function(klass, alias) {
		st[alias] = klass;
	};

	/* Answer all registered Smalltalk classes */
	//TODO: remove the function and make smalltalk.classes an array

	st.classes = function() {
		return classes;
	};

	st.wrappedClasses = function() {
		return wrappedClasses;
	};

	/* Answer all registered Packages as Array */
	// TODO: Remove this hack

	st.packages.all = function() {
		var packages = [];
		for(var i in st.packages) {
			if(!st.packages.hasOwnProperty(i) || typeof(st.packages[i]) === "function") continue;
			packages.push(st.packages[i]);
		}
		return packages;
	};

	/* Answer the direct subclasses of klass. */

	st.subclasses = function(klass) {
		var subclasses = [];
		var classes = st.classes();
		for(var i=0; i < classes.length; i++) {
			var c = classes[i];
			if(c.fn) {
				//Classes
				if(c.superclass === klass) {
					subclasses.push(c);
				}
				c = c.klass;
				//Metaclasses
				if(c && c.superclass === klass) {
					subclasses.push(c);
				}
			}
		}
		return subclasses;
	};

	st.allSubclasses = function(klass) {
		var result, subclasses;
		result = subclasses = st.subclasses(klass);
		subclasses.forEach(function(subclass) {
			result.push.apply(result, st.allSubclasses(subclass));
		});

		return result;
	};

}

function MethodsBrik(brikz, st) {

	var manip = brikz.ensure("manipulation");
	var org = brikz.ensure("organize");
	var instance = brikz.ensure("instance");
	var dnu = brikz.ensure("dnu");
	brikz.ensure("selectorConversion");

	function SmalltalkMethod() {}
	inherits(SmalltalkMethod, SmalltalkObject);

	this.Method = SmalltalkMethod;

	/* Smalltalk method object. To add a method to a class,
	 use smalltalk.addMethod() */

	st.method = function(spec) {
		var that = new SmalltalkMethod();
		that.selector          = spec.selector;
		that.jsSelector        = spec.jsSelector;
		that.args              = spec.args || {};
		that.category          = spec.category;
		that.source            = spec.source;
		that.messageSends      = spec.messageSends || [];
		that.referencedClasses = spec.referencedClasses || [];
		that.fn                = spec.fn;
		return that;
	};

	function installNewDnuHandler(newHandler) {
		manip.installMethodIfAbsent(newHandler, st.Object);
		var wrappedClasses = st.wrappedClasses();
		for(var i = 0; i < wrappedClasses.length; i++) {
			manip.installMethodIfAbsent(newHandler, wrappedClasses[i]);
		}
	}

	/* Add/remove a method to/from a class */

	/* This is a temporary version of addMethod() for backward compatibility */
	st.addMethod = function(method_exJsSelector, klass_exMethod, exKlass) {
		if (typeof method_exJsSelector === "string") { //legacy
			if (method_exJsSelector !== st.selector(klass_exMethod.selector)) {
				console.log("DISCREPANCY: arg, in_method");
				console.log(method_exJsSelector);
				console.log(st.selector(klass_exMethod.selector));
				klass_exMethod.jsSelector = method_exJsSelector;
			}
			return new_addMethod(klass_exMethod, exKlass);
		}

		return new_addMethod(method_exJsSelector, klass_exMethod);
	};

	// later, st.addMethod can be this:
	function new_addMethod(method, klass) {
		if (!(method.jsSelector)) {
			method.jsSelector = st.selector(method.selector);
		}
		manip.installMethod(method, klass);
		klass.methods[method.selector] = method;
		method.methodClass = klass;

		// During the bootstrap, #addCompiledMethod is not used.
		// Therefore we populate the organizer here too
		org.addOrganizationElement(klass, method.category);

		// If already initialized (else it will be done later anyway),
		// re-initialize all subclasses to ensure the new method
		// propagation (for wrapped classes, not using the prototype
		// chain.
		if(instance.initialized()) {
			st.allSubclasses(klass).forEach(function(subclass) {
				st.initClass(subclass);
			});
		}

		for(var i=0; i<method.messageSends.length; i++) {
			var dnuHandler = dnu.get(method.messageSends[i]);
			if(instance.initialized()) {
				installNewDnuHandler(dnuHandler);
			}
		}
	}

	st.removeMethod = function(method) {
		var klass = method.methodClass;

		delete klass.fn.prototype[st.selector(method.selector)];
		delete klass.methods[method.selector];

		// Do *not* delete protocols from here.
		// This is handled by #removeCompiledMethod
	};

	/* Answer all method selectors based on dnu handlers */

	st.allSelectors = function() {
		return dnu.selectors;
	};

}

function InstanceBrik(brikz, st) {

	brikz.ensure("classInit");

	/* Array extensions */

	Array.prototype.addElement = function(el) {
		if(typeof el === 'undefined') { return; }
		if(this.indexOf(el) == -1) {
			this.push(el);
		}
	};

	Array.prototype.removeElement = function(el) {
		var i = this.indexOf(el);
		if (i !== -1) { this.splice(i, 1); }
	};

	var initialized = false;

	/* Smalltalk initialization. Called on page load */

	st.initialize = function() {
		if(initialized) { return; }

		st.classes().forEach(function(klass) {
			st.init(klass);
		});
		st.classes().forEach(function(klass) {
			klass._initialize();
		});

		initialized = true;
	};

	this.initialized = function () {
		return initialized;
	};

	/* List of all reserved words in JavaScript. They may not be used as variables
		in Smalltalk. */

	// list of reserved JavaScript keywords as of
	//   http://es5.github.com/#x7.6.1.1
	// and
	//   http://people.mozilla.org/~jorendorff/es6-draft.html#sec-7.6.1
	st.reservedWords = ['break', 'case', 'catch', 'continue', 'debugger',
		'default', 'delete', 'do', 'else', 'finally', 'for', 'function',
		'if', 'in', 'instanceof', 'new', 'return', 'switch', 'this', 'throw',
		'try', 'typeof', 'var', 'void', 'while', 'with',
		// ES5: future use: http://es5.github.com/#x7.6.1.2
		'class', 'const', 'enum', 'export', 'extends', 'import', 'super',
		// ES5: future use in strict mode
		'implements', 'interface', 'let', 'package', 'private', 'protected',
		'public', 'static', 'yield'];

	st.globalJsVariables = ['jQuery', 'window', 'document', 'process', 'global'];

	if(this.jQuery) {
		this.jQuery.allowJavaScriptCalls = true;
	}

	/*
	 * Answer the smalltalk representation of o.
	 * Used in message sends
	 */

	this._st = function (o) {
		if(o == null) {return nil;}
		if(o.klass) {return o;}
		return st.JSObjectProxy._on_(o);
	};

}

function SmalltalkFactory(brikz, st) {

//	var st = this;

	/* This is the current call context object. While it is publicly available,
		Use smalltalk.getThisContext() instead which will answer a safe copy of
		the current context */

	st.thisContext = undefined;

	/* Unique ID number generator */

	var oid = 0;
	st.nextId = function() {
		oid += 1;
		return oid;
	};

	st.withContext = function(worker, setup) {
		if(st.thisContext) {
			st.thisContext.pc++;
			return inContext(worker, setup);
		} else {
			try {
				return inContext(worker, setup);
			} catch(error) {
				if(error.smalltalkError) {
					handleError(error);
				} else {
					var errorWrapper = st.JavaScriptException._on_(error);
					try {errorWrapper._signal();} catch(ex) {}
					errorWrapper._context_(st.getThisContext());
					handleError(errorWrapper);
				}
				// Reset the context stack in any case
				st.thisContext = undefined;
				// Throw the exception anyway, as we want to stop
				// the execution to avoid infinite loops
				// Update: do not throw the exception. It's really annoying.
				// throw error;
			}
		}
	};

	function inContext(worker, setup) {
		var context = pushContext(setup);
		var result = worker(context);
		popContext(context);
		return result;
	}

	/* Handles Smalltalk errors. Triggers the registered ErrorHandler
		(See the Smalltalk class ErrorHandler and its subclasses */

	function handleError(error) {
		st.ErrorHandler._current()._handleError_(error);
	}

	/* Handle thisContext pseudo variable */

	st.getThisContext = function() {
		if(st.thisContext) {
			st.thisContext.init();
			return st.thisContext;
		} else {
			return nil;
		}
	};

	function pushContext(setup) {
		return st.thisContext = new SmalltalkMethodContext(st.thisContext, setup);
	}

	function popContext(context) {
		st.thisContext = context.homeContext;
	}

	/* Converts a JavaScript object to valid Smalltalk Object */
	st.readJSObject = function(js) {
		var object = js;
		var readObject = (js.constructor === Object);
		var readArray = (js.constructor === Array);

		if(readObject) {
			object = st.Dictionary._new();
		}
		for(var i in js) {
			if(readObject) {
				object._at_put_(i, st.readJSObject(js[i]));
			}
			if(readArray) {
				object[i] = st.readJSObject(js[i]);
			}
		}
		return object;
	};

	/* Boolean assertion */
	st.assert = function(shouldBeBoolean) {
		if ((undefined !== shouldBeBoolean) && (shouldBeBoolean.klass === st.Boolean)) {
			return (shouldBeBoolean == true);
		} else {
			st.NonBooleanReceiver._new()._object_(shouldBeBoolean)._signal();
		}
	};

	/* Backward compatibility with Amber 0.9.1 */
	st.symbolFor = function(aString) { return aString; };

}

function MessageSendBrik(brikz, st) {

	brikz.ensure("selectorConversion");

	/* Handles unhandled errors during message sends */
	// simply send the message and handle #dnu:

	st.send = function(receiver, selector, args, klass) {
		var method;
		if(receiver === null) {
			receiver = nil;
		}
		method = klass ? klass.fn.prototype[selector] : receiver.klass && receiver[selector];
		if(method) {
			return method.apply(receiver, args);
		} else {
			return messageNotUnderstood(receiver, selector, args);
		}
	};

	/* Handles #dnu: *and* JavaScript method calls.
	 if the receiver has no klass, we consider it a JS object (outside of the
	 Amber system). Else assume that the receiver understands #doesNotUnderstand: */

	function messageNotUnderstood(receiver, selector, args) {
		/* Handles JS method calls. */
		if(receiver.klass === undefined || receiver.allowJavaScriptCalls) {
			return callJavaScriptMethod(receiver, selector, args);
		}

		/* Handles not understood messages. Also see the Amber counter-part
		 Object>>doesNotUnderstand: */

		return receiver._doesNotUnderstand_(
			st.Message._new()
				._selector_(st.convertSelector(selector))
				._arguments_(args)
		);
	}

	/* Call a method of a JS object, or answer a property if it exists.
	 Else try wrapping a JSObjectProxy around the receiver.

	 If the object property is a function, then call it, except if it starts with
	 an uppercase character (we probably want to answer the function itself in this
	 case and send it #new from Amber).

	 Converts keyword-based selectors by using the first
	 keyword only, but keeping all message arguments.

	 Example:
	 "self do: aBlock with: anObject" -> "self.do(aBlock, anObject)" */

	function callJavaScriptMethod(receiver, selector, args) {
		var jsSelector = selector._asJavaScriptSelector();
		var jsProperty = receiver[jsSelector];
		if(typeof jsProperty === "function" && !/^[A-Z]/.test(jsSelector)) {
			return jsProperty.apply(receiver, args);
		} else if(jsProperty !== undefined) {
			if(args[0]) {
				receiver[jsSelector] = args[0];
				return nil;
			} else {
				return jsProperty;
			}
		}

		return st.send(st.JSObjectProxy._on_(receiver), selector, args);
	}

	this.messageNotUnderstood = messageNotUnderstood;
}

function SelectorConversionBrik(brikz, st) {
	/* Convert a Smalltalk selector into a JS selector */

	st.selector = function(string) {
		var selector = '_' + string;
		selector = selector.replace(/:/g, '_');
		selector = selector.replace(/[\&]/g, '_and');
		selector = selector.replace(/[\|]/g, '_or');
		selector = selector.replace(/[+]/g, '_plus');
		selector = selector.replace(/-/g, '_minus');
		selector = selector.replace(/[*]/g ,'_star');
		selector = selector.replace(/[\/]/g ,'_slash');
		selector = selector.replace(/[\\]/g ,'_backslash');
		selector = selector.replace(/[\~]/g ,'_tild');
		selector = selector.replace(/>/g ,'_gt');
		selector = selector.replace(/</g ,'_lt');
		selector = selector.replace(/=/g ,'_eq');
		selector = selector.replace(/,/g ,'_comma');
		selector = selector.replace(/[@]/g ,'_at');
		return selector;
	};

	/* Convert a string to a valid smalltalk selector.
		if you modify the following functions, also change String>>asSelector
		accordingly */

	st.convertSelector = function(selector) {
		if(selector.match(/__/)) {
			return convertBinarySelector(selector);
		} else {
			return convertKeywordSelector(selector);
		}
	};

	function convertKeywordSelector(selector) {
		return selector.replace(/^_/, '').replace(/_/g, ':');
	}

	function convertBinarySelector(selector) {
		return selector
			.replace(/^_/, '')
			.replace(/_and/g, '&')
			.replace(/_or/g, '|')
			.replace(/_plus/g, '+')
			.replace(/_minus/g, '-')
			.replace(/_star/g, '*')
			.replace(/_slash/g, '/')
			.replace(/_backslash/g, '\\')
			.replace(/_tild/g, '~')
			.replace(/_gt/g, '>')
			.replace(/_lt/g, '<')
			.replace(/_eq/g, '=')
			.replace(/_comma/g, ',')
			.replace(/_at/g, '@');
	}
}

function SmalltalkMethodContext(home, setup) {
	this.homeContext = home;
	this.setup       = setup || function() {};
	this.pc          = 0;
}

// Fallbacks
SmalltalkMethodContext.prototype.locals = {};
SmalltalkMethodContext.prototype.receiver = null;
SmalltalkMethodContext.prototype.selector = null;
SmalltalkMethodContext.prototype.lookupClass = null;

inherits(SmalltalkMethodContext, SmalltalkObject);

brikz.dnu = DNUBrik;
brikz.messageSend = MessageSendBrik;
brikz.organize = OrganizeBrik;
brikz.selectorConversion = SelectorConversionBrik;
brikz.smalltalk = SmalltalkFactory;
brikz.classInit = ClassInitBrik;
brikz.manipulation = ManipulationBrik;
brikz.classes = ClassesBrik;
brikz.methods = MethodsBrik;
brikz.instance = InstanceBrik;
brikz.rebuild();

var smalltalk = api;

SmalltalkMethodContext.prototype.fill = function(receiver, selector, locals, lookupClass) {
	this.receiver    = receiver;
	this.selector    = selector;
	this.locals      = locals || {};
	this.lookupClass = lookupClass;
};

SmalltalkMethodContext.prototype.fillBlock = function(locals, ctx) {
	this.locals        = locals || {};
	this.outerContext  = ctx;
};

SmalltalkMethodContext.prototype.init = function() {
	var home = this.homeContext;
	if(home) {
		home = home.init();
	}

	this.setup(this);
};

SmalltalkMethodContext.prototype.method = function() {
	var method;
	var lookup = this.lookupClass || this.receiver.klass;
	while(!method && lookup) {
		method = lookup.methods[smalltalk.convertSelector(this.selector)];
		lookup = lookup.superclass;
	}
	return method;
};

/***************************************** BOOTSTRAP ******************************************/

smalltalk.wrapClassName("Object", "Kernel-Objects", SmalltalkObject, undefined, false);
smalltalk.wrapClassName("Behavior", "Kernel-Classes", brikz.classes.Behavior, smalltalk.Object, false);
smalltalk.wrapClassName("Metaclass", "Kernel-Classes", brikz.classes.Metaclass, smalltalk.Behavior, false);
smalltalk.wrapClassName("Class", "Kernel-Classes", brikz.classes.Class, smalltalk.Behavior, false);

smalltalk.Object.klass.superclass = smalltalk.Class;


smalltalk.wrapClassName("Smalltalk", "Kernel-Objects", Smalltalk, smalltalk.Object, false);
smalltalk.wrapClassName("Package", "Kernel-Objects", brikz.classes.Package, smalltalk.Object, false);
smalltalk.wrapClassName("CompiledMethod", "Kernel-Methods", brikz.methods.Method, smalltalk.Object, false);
smalltalk.wrapClassName("Organizer", "Kernel-Objects", brikz.organize.Organizer, smalltalk.Object, false);
smalltalk.wrapClassName("PackageOrganizer", "Kernel-Objects", brikz.organize.PackageOrganizer, smalltalk.Organizer, false);
smalltalk.wrapClassName("ClassOrganizer", "Kernel-Objects", brikz.organize.ClassOrganizer, smalltalk.Organizer, false);


smalltalk.wrapClassName("Number", "Kernel-Objects", Number, smalltalk.Object);
smalltalk.wrapClassName("BlockClosure", "Kernel-Methods", Function, smalltalk.Object);
smalltalk.wrapClassName("Boolean", "Kernel-Objects", Boolean, smalltalk.Object);
smalltalk.wrapClassName("Date", "Kernel-Objects", Date, smalltalk.Object);
smalltalk.wrapClassName("UndefinedObject", "Kernel-Objects", SmalltalkNil, smalltalk.Object, false);

smalltalk.addClass("Collection", smalltalk.Object, null, "Kernel-Collections");
smalltalk.addClass("IndexableCollection", smalltalk.Collection, null, "Kernel-Collections");
smalltalk.addClass("SequenceableCollection", smalltalk.IndexableCollection, null, "Kernel-Collections");
smalltalk.addClass("CharacterArray", smalltalk.SequenceableCollection, null, "Kernel-Collections");
smalltalk.wrapClassName("String", "Kernel-Collections", String, smalltalk.CharacterArray);
smalltalk.wrapClassName("Array", "Kernel-Collections", Array, smalltalk.SequenceableCollection);
smalltalk.wrapClassName("RegularExpression", "Kernel-Collections", RegExp, smalltalk.Object);

smalltalk.wrapClassName("Error", "Kernel-Exceptions", Error, smalltalk.Object);
smalltalk.wrapClassName("MethodContext", "Kernel-Methods", SmalltalkMethodContext, smalltalk.Object, false);

/* Alias definitions */

smalltalk.alias(smalltalk.Array, "OrderedCollection");
smalltalk.alias(smalltalk.Date, "Time");

global_smalltalk = api;
global_nil = nil;
global__st = brikz.instance._st;

})();