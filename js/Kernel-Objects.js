define("amber_core/Kernel-Objects", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st"], function(smalltalk,nil,_st){
smalltalk.addPackage('Kernel-Objects');
smalltalk.packages["Kernel-Objects"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('ProtoObject', smalltalk.nil, [], 'Kernel-Objects');
smalltalk.ProtoObject.comment="I implement the basic behavior required for any object in Amber.\x0a\x0aIn most cases, subclassing `ProtoObject` is wrong and `Object` should be used instead. However subclassing `ProtoObject` can be useful in some special cases like proxy implementations. ";
smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq_eq(anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{anObject:anObject},smalltalk.ProtoObject)})},
args: ["anObject"],
source: "= anObject\x0a\x09^ self == anObject",
messageSends: ["=="],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
protocol: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._identityHash();
$ctx1.sendIdx["identityHash"]=1;
$1=_st($2).__eq(_st(anObject)._identityHash());
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{anObject:anObject},smalltalk.ProtoObject)})},
args: ["anObject"],
source: "== anObject\x0a\x09^ self identityHash = anObject identityHash",
messageSends: ["=", "identityHash"],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._printString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asString",{},smalltalk.ProtoObject)})},
args: [],
source: "asString\x0a\x09^ self printString",
messageSends: ["printString"],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "class",
protocol: 'accessing',
fn: function (){
var self=this;
return self.klass;
return self},
args: [],
source: "class\x0a\x09<return self.klass>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "doesNotUnderstand:",
protocol: 'error handling',
fn: function (aMessage){
var self=this;
function $MessageNotUnderstood(){return smalltalk.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st($MessageNotUnderstood())._new();
_st($1)._receiver_(self);
_st($1)._message_(aMessage);
$2=_st($1)._signal();
return self}, function($ctx1) {$ctx1.fill(self,"doesNotUnderstand:",{aMessage:aMessage},smalltalk.ProtoObject)})},
args: ["aMessage"],
source: "doesNotUnderstand: aMessage\x0a\x09MessageNotUnderstood new\x0a\x09\x09receiver: self;\x0a\x09\x09message: aMessage;\x0a\x09\x09signal",
messageSends: ["receiver:", "new", "message:", "signal"],
referencedClasses: ["MessageNotUnderstood"]
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "identityHash",
protocol: 'accessing',
fn: function (){
var self=this;

		var hash=self.identityHash;
		if (hash) return hash;
		hash=smalltalk.nextId();
		Object.defineProperty(self, 'identityHash', {value:hash});
		return hash;
	;
return self},
args: [],
source: "identityHash\x0a\x09<\x0a\x09\x09var hash=self.identityHash;\x0a\x09\x09if (hash) return hash;\x0a\x09\x09hash=smalltalk.nextId();\x0a\x09\x09Object.defineProperty(self, 'identityHash', {value:hash});\x0a\x09\x09return hash;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return self},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inspect",
protocol: 'inspecting',
fn: function (){
var self=this;
function $Inspector(){return smalltalk.Inspector||(typeof Inspector=="undefined"?nil:Inspector)}
return smalltalk.withContext(function($ctx1) { 
_st($Inspector())._inspect_(self);
return self}, function($ctx1) {$ctx1.fill(self,"inspect",{},smalltalk.ProtoObject)})},
args: [],
source: "inspect\x0a\x09Inspector inspect: self",
messageSends: ["inspect:"],
referencedClasses: ["Inspector"]
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
return self},
args: ["anInspector"],
source: "inspectOn: anInspector",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
 return self['@'+aString] ;
return self},
args: ["aString"],
source: "instVarAt: aString\x0a\x09< return self['@'+aString] >",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "instVarAt:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
 self['@' + aString] = anObject ;
return self},
args: ["aString", "anObject"],
source: "instVarAt: aString put: anObject\x0a\x09< self['@' + aString] = anObject >",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:",
protocol: 'message handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._perform_withArguments_(aString,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"perform:",{aString:aString},smalltalk.ProtoObject)})},
args: ["aString"],
source: "perform: aString\x0a\x09^ self perform: aString withArguments: #()",
messageSends: ["perform:withArguments:"],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "perform:withArguments:",
protocol: 'message handling',
fn: function (aString,aCollection){
var self=this;
return smalltalk.send(self, aString._asSelector(), aCollection);
return self},
args: ["aString", "aCollection"],
source: "perform: aString withArguments: aCollection\x0a\x09<return smalltalk.send(self, aString._asSelector(), aCollection)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $5,$4,$3,$2,$1;
$5=self._class();
$ctx1.sendIdx["class"]=1;
$4=_st($5)._name();
$ctx1.sendIdx["name"]=1;
$3=_st($4)._first();
$2=_st($3)._isVowel();
if(smalltalk.assert($2)){
$1="an ";
} else {
$1="a ";
};
_st(aStream)._nextPutAll_($1);
$ctx1.sendIdx["nextPutAll:"]=1;
_st(aStream)._nextPutAll_(_st(self._class())._name());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.ProtoObject)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: (self class name first isVowel\x0a\x09\x09ifTrue: [ 'an ' ]\x0a\x09\x09ifFalse: [ 'a ' ]).\x0a\x09aStream nextPutAll: self class name",
messageSends: ["nextPutAll:", "ifTrue:ifFalse:", "isVowel", "first", "name", "class"],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "printString",
protocol: 'printing',
fn: function (){
var self=this;
function $String(){return smalltalk.String||(typeof String=="undefined"?nil:String)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($String())._streamContents_((function(str){
return smalltalk.withContext(function($ctx2) {
return self._printOn_(str);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"printString",{},smalltalk.ProtoObject)})},
args: [],
source: "printString\x0a\x09^ String streamContents: [ :str | \x0a\x09\x09self printOn: str ]",
messageSends: ["streamContents:", "printOn:"],
referencedClasses: ["String"]
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "yourself",
protocol: 'accessing',
fn: function (){
var self=this;
return self;
},
args: [],
source: "yourself\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "~=",
protocol: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__eq(anObject)).__eq(false);
$ctx1.sendIdx["="]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"~=",{anObject:anObject},smalltalk.ProtoObject)})},
args: ["anObject"],
source: "~= anObject\x0a\x09^ (self = anObject) = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.ProtoObject);

smalltalk.addMethod(
smalltalk.method({
selector: "~~",
protocol: 'comparing',
fn: function (anObject){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__eq_eq(anObject)).__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"~~",{anObject:anObject},smalltalk.ProtoObject)})},
args: ["anObject"],
source: "~~ anObject\x0a\x09^ (self == anObject) = false",
messageSends: ["=", "=="],
referencedClasses: []
}),
smalltalk.ProtoObject);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'accessing',
fn: function (){
var self=this;
return "class";
},
args: [],
source: "heliosClass\x0a\x09\x22Should be an Helios extension. Unfortunately, since helios can browse remote\x0a\x09environments, we can't extend base classes\x22\x0a\x09\x0a\x09^ 'class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return self},
args: [],
source: "initialize",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProtoObject.klass);


smalltalk.addClass('Object', smalltalk.ProtoObject, [], 'Kernel-Objects');
smalltalk.Object.comment="**I am the root of the Smalltalk class system**. With the exception of unual subclasses of `ProtoObject`, all other classes in the system are subclasses of me.\x0a\x0aI provide default behavior common to all normal objects (some of it inherited from `ProtoObject`), such as:\x0a\x0a- accessing\x0a- copying\x0a- comparison\x0a- error handling\x0a- message sending\x0a- reflection\x0a\x0aAlso utility messages that all objects should respond to are defined here.\x0a\x0aI have no instance variable.\x0a\x0a##Access\x0a\x0aInstance variables can be accessed with `#instVarAt:` and `#instVarAt:put:`. `#instanceVariableNames` answers a collection of all instance variable names.\x0aAccessing JavaScript properties of an object is done through `#basicAt:`, `#basicAt:put:` and `basicDelete:`.\x0a\x0a##Copying\x0a\x0aCopying an object is handled by `#copy` and `#deepCopy`. The first one performs a shallow copy of the receiver, while the second one performs a deep copy.\x0aThe hook method `#postCopy` can be overriden in subclasses to copy fields as necessary to complete the full copy. It will be sent by the copy of the receiver.\x0a\x0a##Comparison\x0a\x0aI understand equality `#=` and identity `#==` comparison.\x0a\x0a##Error handling\x0a\x0a- `#halt` is the typical message to use for inserting breakpoints during debugging.\x0a- `#error:` throws a generic error exception\x0a- `#doesNotUnderstand:` handles the fact that there was an attempt to send the given message to the receiver but the receiver does not understand this message.\x0a\x09Overriding this message can be useful to implement proxies for example.";
smalltalk.addMethod(
smalltalk.method({
selector: "->",
protocol: 'converting',
fn: function (anObject){
var self=this;
function $Association(){return smalltalk.Association||(typeof Association=="undefined"?nil:Association)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Association())._key_value_(self,anObject);
return $1;
}, function($ctx1) {$ctx1.fill(self,"->",{anObject:anObject},smalltalk.Object)})},
args: ["anObject"],
source: "-> anObject\x0a\x09^ Association key: self value: anObject",
messageSends: ["key:value:"],
referencedClasses: ["Association"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
var variables;
function $HashedCollection(){return smalltalk.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $1;
variables=_st($HashedCollection())._new();
_st(_st(self._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(each,_st(self._instVarAt_(each))._asJSON());
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
$1=variables;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSON",{variables:variables},smalltalk.Object)})},
args: [],
source: "asJSON\x0a\x09| variables |\x0a\x09variables := HashedCollection new.\x0a\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarAt: each) asJSON ].\x0a\x09^ variables",
messageSends: ["new", "do:", "allInstanceVariableNames", "class", "at:put:", "asJSON", "instVarAt:"],
referencedClasses: ["HashedCollection"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSONString",
protocol: 'converting',
fn: function (){
var self=this;
function $JSON(){return smalltalk.JSON||(typeof JSON=="undefined"?nil:JSON)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($JSON())._stringify_(self._asJSON());
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSONString",{},smalltalk.Object)})},
args: [],
source: "asJSONString\x0a\x09^ JSON stringify: self asJSON",
messageSends: ["stringify:", "asJSON"],
referencedClasses: ["JSON"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asString();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Object)})},
args: [],
source: "asJavascript\x0a\x09^ self asString",
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
return self[aString];
return self},
args: ["aString"],
source: "basicAt: aString\x0a\x09<return self[aString]>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicAt:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
return self[aString] = anObject;
return self},
args: ["aString", "anObject"],
source: "basicAt: aString put: anObject\x0a\x09<return self[aString] = anObject>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicDelete:",
protocol: 'accessing',
fn: function (aString){
var self=this;
delete self[aString]; return aString;
return self},
args: ["aString"],
source: "basicDelete: aString\x0a\x09<delete self[aString]; return aString>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicPerform:",
protocol: 'message handling',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._basicPerform_withArguments_(aString,[]);
return $1;
}, function($ctx1) {$ctx1.fill(self,"basicPerform:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "basicPerform: aString\x0a\x09^ self basicPerform: aString withArguments: #()",
messageSends: ["basicPerform:withArguments:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "basicPerform:withArguments:",
protocol: 'message handling',
fn: function (aString,aCollection){
var self=this;
return self[aString].apply(self, aCollection);;
return self},
args: ["aString", "aCollection"],
source: "basicPerform: aString withArguments: aCollection\x0a\x09<return self[aString].apply(self, aCollection);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "copy",
protocol: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._shallowCopy())._postCopy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"copy",{},smalltalk.Object)})},
args: [],
source: "copy\x0a\x09^ self shallowCopy postCopy",
messageSends: ["postCopy", "shallowCopy"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;

		var copy = self.klass._new();
		Object.keys(self).forEach(function (i) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i]._deepCopy();
		}
		});
		return copy;
	;
return self},
args: [],
source: "deepCopy\x0a\x09<\x0a\x09\x09var copy = self.klass._new();\x0a\x09\x09Object.keys(self).forEach(function (i) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09\x09copy[i] = self[i]._deepCopy();\x0a\x09\x09}\x0a\x09\x09});\x0a\x09\x09return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "deprecatedAPI",
protocol: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$6,$5,$4,$8,$7,$3,$2;
$1=console;
$6=smalltalk.getThisContext()._home();
$ctx1.sendIdx["home"]=1;
$5=_st($6)._asString();
$ctx1.sendIdx["asString"]=1;
$4=_st($5).__comma(" is deprecated! (in ");
$8=_st(smalltalk.getThisContext()._home())._home();
$ctx1.sendIdx["home"]=2;
$7=_st($8)._asString();
$3=_st($4).__comma($7);
$ctx1.sendIdx[","]=2;
$2=_st($3).__comma(")");
$ctx1.sendIdx[","]=1;
_st($1)._warn_($2);
return self}, function($ctx1) {$ctx1.fill(self,"deprecatedAPI",{},smalltalk.Object)})},
args: [],
source: "deprecatedAPI\x0a\x09\x22Just a simple way to deprecate methods.\x0a\x09#deprecatedAPI is in the 'error handling' protocol even if it doesn't throw an error,\x0a\x09but it could in the future.\x22\x0a\x09console warn: thisContext home asString, ' is deprecated! (in ', thisContext home home asString, ')'",
messageSends: ["warn:", ",", "asString", "home"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "error:",
protocol: 'error handling',
fn: function (aString){
var self=this;
function $Error(){return smalltalk.Error||(typeof Error=="undefined"?nil:Error)}
return smalltalk.withContext(function($ctx1) { 
_st($Error())._signal_(aString);
return self}, function($ctx1) {$ctx1.fill(self,"error:",{aString:aString},smalltalk.Object)})},
args: ["aString"],
source: "error: aString\x0a\x09Error signal: aString",
messageSends: ["signal:"],
referencedClasses: ["Error"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "halt",
protocol: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Halt encountered");
return self}, function($ctx1) {$ctx1.fill(self,"halt",{},smalltalk.Object)})},
args: [],
source: "halt\x0a\x09self error: 'Halt encountered'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return self;
},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ anotherBlock value: self",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:",{aBlock:aBlock},smalltalk.Object)})},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value: self",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value_(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Object)})},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value: self",
messageSends: ["value:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "inspectOn:",
protocol: 'inspecting',
fn: function (anInspector){
var self=this;
var variables;
function $Dictionary(){return smalltalk.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
variables=_st($Dictionary())._new();
_st(variables)._at_put_("#self",self);
$ctx1.sendIdx["at:put:"]=1;
_st(_st(self._class())._allInstanceVariableNames())._do_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(variables)._at_put_(each,self._instVarAt_(each));
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
_st(anInspector)._setLabel_(self._printString());
$1=_st(anInspector)._setVariables_(variables);
return self}, function($ctx1) {$ctx1.fill(self,"inspectOn:",{anInspector:anInspector,variables:variables},smalltalk.Object)})},
args: ["anInspector"],
source: "inspectOn: anInspector\x0a\x09| variables |\x0a\x09variables := Dictionary new.\x0a\x09variables at: '#self' put: self.\x0a\x09self class allInstanceVariableNames do: [ :each |\x0a\x09\x09variables at: each put: (self instVarAt: each) ].\x0a\x09anInspector\x0a\x09\x09setLabel: self printString;\x0a\x09\x09setVariables: variables",
messageSends: ["new", "at:put:", "do:", "allInstanceVariableNames", "class", "instVarAt:", "setLabel:", "printString", "setVariables:"],
referencedClasses: ["Dictionary"]
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isBehavior",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBehavior\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isBoolean",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isBoolean\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isClass",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isClass\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isCompiledMethod",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isCompiledMethod\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isImmutable\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isKindOf:",
protocol: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._isMemberOf_(aClass);
if(smalltalk.assert($2)){
$1=true;
} else {
$1=_st(self._class())._inheritsFrom_(aClass);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"isKindOf:",{aClass:aClass},smalltalk.Object)})},
args: ["aClass"],
source: "isKindOf: aClass\x0a\x09^ (self isMemberOf: aClass)\x0a\x09\x09ifTrue: [ true ]\x0a\x09\x09ifFalse: [ self class inheritsFrom: aClass ]",
messageSends: ["ifTrue:ifFalse:", "isMemberOf:", "inheritsFrom:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isMemberOf:",
protocol: 'testing',
fn: function (aClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class()).__eq(aClass);
return $1;
}, function($ctx1) {$ctx1.fill(self,"isMemberOf:",{aClass:aClass},smalltalk.Object)})},
args: ["aClass"],
source: "isMemberOf: aClass\x0a\x09^ self class = aClass",
messageSends: ["=", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isMetaclass",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isMetaclass\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isNil",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isNil\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isNumber",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isNumber\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isPackage",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isPackage\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isParseFailure",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isParseFailure\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isString",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isString\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "isSymbol",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "isSymbol\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "notNil",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._isNil())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"notNil",{},smalltalk.Object)})},
args: [],
source: "notNil\x0a\x09^ self isNil not",
messageSends: ["not", "isNil"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "postCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self},
args: [],
source: "postCopy",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "putOn:",
protocol: 'streaming',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPut_(self);
return self}, function($ctx1) {$ctx1.fill(self,"putOn:",{aStream:aStream},smalltalk.Object)})},
args: ["aStream"],
source: "putOn: aStream\x0a\x09aStream nextPut: self",
messageSends: ["nextPut:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "respondsTo:",
protocol: 'testing',
fn: function (aSelector){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._class())._canUnderstand_(aSelector);
return $1;
}, function($ctx1) {$ctx1.fill(self,"respondsTo:",{aSelector:aSelector},smalltalk.Object)})},
args: ["aSelector"],
source: "respondsTo: aSelector\x0a\x09^ self class canUnderstand: aSelector",
messageSends: ["canUnderstand:", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;

		var copy = self.klass._new();
		Object.keys(self).forEach(function(i) {
		if(/^@.+/.test(i)) {
			copy[i] = self[i];
		}
		});
		return copy;
	;
return self},
args: [],
source: "shallowCopy\x0a\x09<\x0a\x09\x09var copy = self.klass._new();\x0a\x09\x09Object.keys(self).forEach(function(i) {\x0a\x09\x09if(/^@.+/.test(i)) {\x0a\x09\x09\x09copy[i] = self[i];\x0a\x09\x09}\x0a\x09\x09});\x0a\x09\x09return copy;\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "shouldNotImplement",
protocol: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("This method should not be implemented in ".__comma(_st(self._class())._name()));
return self}, function($ctx1) {$ctx1.fill(self,"shouldNotImplement",{},smalltalk.Object)})},
args: [],
source: "shouldNotImplement\x0a\x09self error: 'This method should not be implemented in ', self class name",
messageSends: ["error:", ",", "name", "class"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "size",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("Object not indexable");
return self}, function($ctx1) {$ctx1.fill(self,"size",{},smalltalk.Object)})},
args: [],
source: "size\x0a\x09self error: 'Object not indexable'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "subclassResponsibility",
protocol: 'error handling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("This method is a responsibility of a subclass");
return self}, function($ctx1) {$ctx1.fill(self,"subclassResponsibility",{},smalltalk.Object)})},
args: [],
source: "subclassResponsibility\x0a\x09self error: 'This method is a responsibility of a subclass'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "throw:",
protocol: 'error handling',
fn: function (anObject){
var self=this;
 throw anObject ;
return self},
args: ["anObject"],
source: "throw: anObject\x0a\x09< throw anObject >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "try:catch:",
protocol: 'error handling',
fn: function (aBlock,anotherBlock){
var self=this;
try{return aBlock._value()} catch(e) {return anotherBlock._value_(e)};
return self},
args: ["aBlock", "anotherBlock"],
source: "try: aBlock catch: anotherBlock\x0a\x09<try{return aBlock._value()} catch(e) {return anotherBlock._value_(e)}>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);

smalltalk.addMethod(
smalltalk.method({
selector: "value",
protocol: 'accessing',
fn: function (){
var self=this;
return self.valueOf();
return self},
args: [],
source: "value\x0a\x09<return self.valueOf()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object);


smalltalk.addMethod(
smalltalk.method({
selector: "accessorProtocolWith:",
protocol: 'helios',
fn: function (aGenerator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aGenerator)._accessorProtocolForObject();
return self}, function($ctx1) {$ctx1.fill(self,"accessorProtocolWith:",{aGenerator:aGenerator},smalltalk.Object.klass)})},
args: ["aGenerator"],
source: "accessorProtocolWith: aGenerator\x0a\x09aGenerator accessorProtocolForObject",
messageSends: ["accessorProtocolForObject"],
referencedClasses: []
}),
smalltalk.Object.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "accessorsSourceCodesWith:",
protocol: 'helios',
fn: function (aGenerator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aGenerator)._accessorsForObject();
return self}, function($ctx1) {$ctx1.fill(self,"accessorsSourceCodesWith:",{aGenerator:aGenerator},smalltalk.Object.klass)})},
args: ["aGenerator"],
source: "accessorsSourceCodesWith: aGenerator\x0a\x09aGenerator accessorsForObject",
messageSends: ["accessorsForObject"],
referencedClasses: []
}),
smalltalk.Object.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "class";
},
args: [],
source: "heliosClass\x0a\x09\x22Should be an Helios extension. Unfortunately, since helios can browse remote\x0a\x09environments, we can't extend base classes\x22\x0a\x09\x0a\x09^ 'class'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return self},
args: [],
source: "initialize\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.Object.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeProtocolWith:",
protocol: 'helios',
fn: function (aGenerator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aGenerator)._initializeProtocolForObject();
return self}, function($ctx1) {$ctx1.fill(self,"initializeProtocolWith:",{aGenerator:aGenerator},smalltalk.Object.klass)})},
args: ["aGenerator"],
source: "initializeProtocolWith: aGenerator\x0a\x09aGenerator initializeProtocolForObject",
messageSends: ["initializeProtocolForObject"],
referencedClasses: []
}),
smalltalk.Object.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeSourceCodesWith:",
protocol: 'helios',
fn: function (aGenerator){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aGenerator)._initializeForObject();
return self}, function($ctx1) {$ctx1.fill(self,"initializeSourceCodesWith:",{aGenerator:aGenerator},smalltalk.Object.klass)})},
args: ["aGenerator"],
source: "initializeSourceCodesWith: aGenerator\x0a\x09aGenerator initializeForObject",
messageSends: ["initializeForObject"],
referencedClasses: []
}),
smalltalk.Object.klass);


smalltalk.addClass('Boolean', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Boolean.comment="I define the protocol for logic testing operations and conditional control structures for the logical values (see the `controlling` protocol).\x0a\x0aI have two instances, `true` and `false`.\x0a\x0aI am directly mapped to JavaScript Boolean. The `true` and `false` objects are the JavaScript boolean objects.\x0a\x0a## Usage Example:\x0a\x0a    aBoolean not ifTrue: [ ... ] ifFalse: [ ... ]";
smalltalk.addMethod(
smalltalk.method({
selector: "&",
protocol: 'controlling',
fn: function (aBoolean){
var self=this;

		if(self == true) {
		return aBoolean;
		} else {
		return false;
		}
	;
return self},
args: ["aBoolean"],
source: "& aBoolean\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBoolean;\x0a\x09\x09} else {\x0a\x09\x09return false;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (aBoolean){
var self=this;

		return aBoolean != null &&
			typeof aBoolean._isBoolean === "function" &&
			aBoolean._isBoolean() &&
			Boolean(self == true) == aBoolean
	;
return self},
args: ["aBoolean"],
source: "= aBoolean\x0a\x09<\x0a\x09\x09return aBoolean != null &&\x0a\x09\x09\x09typeof aBoolean._isBoolean === \x22function\x22 &&\x0a\x09\x09\x09aBoolean._isBoolean() &&\x0a\x09\x09\x09Boolean(self == true) == aBoolean\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "==",
protocol: 'comparing',
fn: function (aBoolean){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(aBoolean);
return $1;
}, function($ctx1) {$ctx1.fill(self,"==",{aBoolean:aBoolean},smalltalk.Boolean)})},
args: ["aBoolean"],
source: "== aBoolean\x0a\x09^ self = aBoolean",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "and:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self.__eq(true);
$1=_st($2)._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
return false;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"and:",{aBlock:aBlock},smalltalk.Boolean)})},
args: ["aBlock"],
source: "and: aBlock\x0a\x09^ self = true\x0a\x09\x09ifTrue: aBlock\x0a\x09\x09ifFalse: [ false ]",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asBit",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
if(smalltalk.assert(self)){
$1=(1);
} else {
$1=(0);
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"asBit",{},smalltalk.Boolean)})},
args: [],
source: "asBit\x0a\x09^ self ifTrue: [ 1 ] ifFalse: [ 0 ]",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asJSON\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
 return self.toString() ;
return self},
args: [],
source: "asString\x0a\x09< return self.toString() >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "deepCopy\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:",{aBlock:aBlock},smalltalk.Boolean)})},
args: ["aBlock"],
source: "ifFalse: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: [] ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifFalse:ifTrue:",
protocol: 'controlling',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ifTrue_ifFalse_(anotherBlock,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifFalse:ifTrue:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.Boolean)})},
args: ["aBlock", "anotherBlock"],
source: "ifFalse: aBlock ifTrue: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: anotherBlock ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ifTrue_ifFalse_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifTrue:",{aBlock:aBlock},smalltalk.Boolean)})},
args: ["aBlock"],
source: "ifTrue: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifTrue: aBlock ifFalse: []",
messageSends: ["ifTrue:ifFalse:"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "ifTrue:ifFalse:",
protocol: 'controlling',
fn: function (aBlock,anotherBlock){
var self=this;

		if(self == true) {
		return aBlock._value();
		} else {
		return anotherBlock._value();
		}
	;
return self},
args: ["aBlock", "anotherBlock"],
source: "ifTrue: aBlock ifFalse: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return aBlock._value();\x0a\x09\x09} else {\x0a\x09\x09return anotherBlock._value();\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "isBoolean",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isBoolean\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "not",
protocol: 'controlling',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq(false);
return $1;
}, function($ctx1) {$ctx1.fill(self,"not",{},smalltalk.Boolean)})},
args: [],
source: "not\x0a\x09^ self = false",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "or:",
protocol: 'controlling',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self.__eq(true);
$1=_st($2)._ifTrue_ifFalse_((function(){
return smalltalk.withContext(function($ctx2) {
return true;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}),aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"or:",{aBlock:aBlock},smalltalk.Boolean)})},
args: ["aBlock"],
source: "or: aBlock\x0a\x09^ self = true\x0a\x09\x09ifTrue: [ true ]\x0a\x09\x09ifFalse: aBlock",
messageSends: ["ifTrue:ifFalse:", "="],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Boolean)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
messageSends: ["nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "shallowCopy\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);

smalltalk.addMethod(
smalltalk.method({
selector: "|",
protocol: 'controlling',
fn: function (aBoolean){
var self=this;

		if(self == true) {
		return true;
		} else {
		return aBoolean;
		}
	;
return self},
args: ["aBoolean"],
source: "| aBoolean\x0a\x09<\x0a\x09\x09if(self == true) {\x0a\x09\x09return true;\x0a\x09\x09} else {\x0a\x09\x09return aBoolean;\x0a\x09\x09}\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Boolean);



smalltalk.addClass('Date', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Date.comment="I am used to work with both dates and times. Therefore `Date today` and `Date now` are both valid in\x0aAmber and answer the same date object.\x0a\x0aDate directly maps to the `Date()` JavaScript constructor, and Amber date objects are JavaScript date objects.\x0a\x0a## API\x0a\x0aThe class-side `instance creation` protocol contains some convenience methods for creating date/time objects such as `#fromSeconds:`.\x0a\x0aArithmetic and comparison is supported (see the `comparing` and `arithmetic` protocols).\x0a\x0aThe `converting` protocol provides convenience methods for various convertions (to numbers, strings, etc.).";
smalltalk.addMethod(
smalltalk.method({
selector: "+",
protocol: 'arithmetic',
fn: function (aDate){
var self=this;
return self + aDate;
return self},
args: ["aDate"],
source: "+ aDate\x0a\x09<return self + aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
protocol: 'arithmetic',
fn: function (aDate){
var self=this;
return self - aDate;
return self},
args: ["aDate"],
source: "- aDate\x0a\x09<return self - aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
protocol: 'comparing',
fn: function (aDate){
var self=this;
return self < aDate;
return self},
args: ["aDate"],
source: "< aDate\x0a\x09<return self < aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
protocol: 'comparing',
fn: function (aDate){
var self=this;
return self <= aDate;
return self},
args: ["aDate"],
source: "<= aDate\x0a\x09<return self <= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
protocol: 'comparing',
fn: function (aDate){
var self=this;
return self > aDate;
return self},
args: ["aDate"],
source: "> aDate\x0a\x09<return self >> aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
protocol: 'comparing',
fn: function (aDate){
var self=this;
return self >= aDate;
return self},
args: ["aDate"],
source: ">= aDate\x0a\x09<return self >>= aDate>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asDateString",
protocol: 'converting',
fn: function (){
var self=this;
return self.toDateString();
return self},
args: [],
source: "asDateString\x0a\x09<return self.toDateString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asLocaleString",
protocol: 'converting',
fn: function (){
var self=this;
return self.toLocaleString();
return self},
args: [],
source: "asLocaleString\x0a\x09<return self.toLocaleString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asMilliseconds",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._time();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asMilliseconds",{},smalltalk.Date)})},
args: [],
source: "asMilliseconds\x0a\x09^ self time",
messageSends: ["time"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._asMilliseconds();
return $1;
}, function($ctx1) {$ctx1.fill(self,"asNumber",{},smalltalk.Date)})},
args: [],
source: "asNumber\x0a\x09^ self asMilliseconds",
messageSends: ["asMilliseconds"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
return self.toString();
return self},
args: [],
source: "asString\x0a\x09<return self.toString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "asTimeString",
protocol: 'converting',
fn: function (){
var self=this;
return self.toTimeString();
return self},
args: [],
source: "asTimeString\x0a\x09<return self.toTimeString()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "day",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._dayOfWeek();
return $1;
}, function($ctx1) {$ctx1.fill(self,"day",{},smalltalk.Date)})},
args: [],
source: "day\x0a\x09^ self dayOfWeek",
messageSends: ["dayOfWeek"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "day:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._dayOfWeek_(aNumber);
return self}, function($ctx1) {$ctx1.fill(self,"day:",{aNumber:aNumber},smalltalk.Date)})},
args: ["aNumber"],
source: "day: aNumber\x0a\x09self dayOfWeek: aNumber",
messageSends: ["dayOfWeek:"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfMonth",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getDate();
return self},
args: [],
source: "dayOfMonth\x0a\x09<return self.getDate()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfMonth:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self.setDate(aNumber);
return self},
args: ["aNumber"],
source: "dayOfMonth: aNumber\x0a\x09<self.setDate(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfWeek",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getDay() + 1;
return self},
args: [],
source: "dayOfWeek\x0a\x09<return self.getDay() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "dayOfWeek:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
return self.setDay(aNumber - 1);
return self},
args: ["aNumber"],
source: "dayOfWeek: aNumber\x0a\x09<return self.setDay(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "hours",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getHours();
return self},
args: [],
source: "hours\x0a\x09<return self.getHours()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "hours:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self.setHours(aNumber);
return self},
args: ["aNumber"],
source: "hours: aNumber\x0a\x09<self.setHours(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "milliseconds",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getMilliseconds();
return self},
args: [],
source: "milliseconds\x0a\x09<return self.getMilliseconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "milliseconds:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self.setMilliseconds(aNumber);
return self},
args: ["aNumber"],
source: "milliseconds: aNumber\x0a\x09<self.setMilliseconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "minutes",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getMinutes();
return self},
args: [],
source: "minutes\x0a\x09<return self.getMinutes()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "minutes:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self.setMinutes(aNumber);
return self},
args: ["aNumber"],
source: "minutes: aNumber\x0a\x09<self.setMinutes(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "month",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getMonth() + 1;
return self},
args: [],
source: "month\x0a\x09<return self.getMonth() + 1>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "month:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self.setMonth(aNumber - 1);
return self},
args: ["aNumber"],
source: "month: aNumber\x0a\x09<self.setMonth(aNumber - 1)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Date)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
messageSends: ["nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "seconds",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getSeconds();
return self},
args: [],
source: "seconds\x0a\x09<return self.getSeconds()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "seconds:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self.setSeconds(aNumber);
return self},
args: ["aNumber"],
source: "seconds: aNumber\x0a\x09<self.setSeconds(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "time",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getTime();
return self},
args: [],
source: "time\x0a\x09<return self.getTime()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "time:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self.setTime(aNumber);
return self},
args: ["aNumber"],
source: "time: aNumber\x0a\x09<self.setTime(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "year",
protocol: 'accessing',
fn: function (){
var self=this;
return self.getFullYear();
return self},
args: [],
source: "year\x0a\x09<return self.getFullYear()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);

smalltalk.addMethod(
smalltalk.method({
selector: "year:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self.setFullYear(aNumber);
return self},
args: ["aNumber"],
source: "year: aNumber\x0a\x09<self.setFullYear(aNumber)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date);


smalltalk.addMethod(
smalltalk.method({
selector: "fromMilliseconds:",
protocol: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_(aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromMilliseconds:",{aNumber:aNumber},smalltalk.Date.klass)})},
args: ["aNumber"],
source: "fromMilliseconds: aNumber\x0a\x09^ self new: aNumber",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromSeconds:",
protocol: 'instance creation',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._fromMilliseconds_(_st(aNumber).__star((1000)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromSeconds:",{aNumber:aNumber},smalltalk.Date.klass)})},
args: ["aNumber"],
source: "fromSeconds: aNumber\x0a\x09^ self fromMilliseconds: aNumber * 1000",
messageSends: ["fromMilliseconds:", "*"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "fromString:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new_(aString);
return $1;
}, function($ctx1) {$ctx1.fill(self,"fromString:",{aString:aString},smalltalk.Date.klass)})},
args: ["aString"],
source: "fromString: aString\x0a\x09\x22Example: Date fromString('2011/04/15 00:00:00')\x22\x0a\x09^ self new: aString",
messageSends: ["new:"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "magnitude";
},
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "millisecondsToRun:",
protocol: 'instance creation',
fn: function (aBlock){
var self=this;
var t;
function $Date(){return smalltalk.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $1;
t=_st($Date())._now();
$ctx1.sendIdx["now"]=1;
_st(aBlock)._value();
$1=_st(_st($Date())._now()).__minus(t);
return $1;
}, function($ctx1) {$ctx1.fill(self,"millisecondsToRun:",{aBlock:aBlock,t:t},smalltalk.Date.klass)})},
args: ["aBlock"],
source: "millisecondsToRun: aBlock\x0a\x09| t |\x0a\x09t := Date now.\x0a\x09aBlock value.\x0a\x09^ Date now - t",
messageSends: ["now", "value", "-"],
referencedClasses: ["Date"]
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "new:",
protocol: 'instance creation',
fn: function (anObject){
var self=this;
return new Date(anObject);
return self},
args: ["anObject"],
source: "new: anObject\x0a\x09<return new Date(anObject)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "now",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._today();
return $1;
}, function($ctx1) {$ctx1.fill(self,"now",{},smalltalk.Date.klass)})},
args: [],
source: "now\x0a\x09^ self today",
messageSends: ["today"],
referencedClasses: []
}),
smalltalk.Date.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "today",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._new();
return $1;
}, function($ctx1) {$ctx1.fill(self,"today",{},smalltalk.Date.klass)})},
args: [],
source: "today\x0a\x09^ self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.Date.klass);


smalltalk.addClass('Number', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Number.comment="I am the Amber representation for all numbers.\x0aI am directly mapped to JavaScript Number.\x0a\x0a## API\x0a\x0aI provide all necessary methods for arithmetic operations, comparison, conversion and so on with numbers.\x0a\x0aMy instances can also be used to evaluate a block a fixed number of times:\x0a\x0a\x095 timesRepeat: [ Transcript show: 'This will be printed 5 times'; cr ].\x0a\x09\x0a\x091 to: 5 do: [ :aNumber| Transcript show: aNumber asString; cr ].\x0a\x09\x0a\x091 to: 10 by: 2 do: [ :aNumber| Transcript show: aNumber asString; cr ].";
smalltalk.addMethod(
smalltalk.method({
selector: "&",
protocol: 'converting',
fn: function (aNumber){
var self=this;
return self & aNumber;
return self},
args: ["aNumber"],
source: "& aNumber\x0a\x09<return self & aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "*",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
return self * aNumber;
return self},
args: ["aNumber"],
source: "* aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self * aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "**",
protocol: 'mathematical functions',
fn: function (exponent){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._raisedTo_(exponent);
return $1;
}, function($ctx1) {$ctx1.fill(self,"**",{exponent:exponent},smalltalk.Number)})},
args: ["exponent"],
source: "** exponent\x0a\x09^ self raisedTo: exponent",
messageSends: ["raisedTo:"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "+",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
return self + aNumber;
return self},
args: ["aNumber"],
source: "+ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self + aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
return self - aNumber;
return self},
args: ["aNumber"],
source: "- aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self - aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "/",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
return self / aNumber;
return self},
args: ["aNumber"],
source: "/ aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self / aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "//",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self.__slash(aNumber))._floor();
return $1;
}, function($ctx1) {$ctx1.fill(self,"//",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "// aNumber\x0a\x09^ (self / aNumber) floor",
messageSends: ["floor", "/"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "<",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
return self < aNumber;
return self},
args: ["aNumber"],
source: "< aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self < aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "<=",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
return self <= aNumber;
return self},
args: ["aNumber"],
source: "<= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self <= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'comparing',
fn: function (aNumber){
var self=this;

		return aNumber != null &&
			typeof aNumber._isNumber === "function" &&
			aNumber._isNumber() &&
			Number(self) == aNumber
	;
return self},
args: ["aNumber"],
source: "= aNumber\x0a\x09<\x0a\x09\x09return aNumber != null &&\x0a\x09\x09\x09typeof aNumber._isNumber === \x22function\x22 &&\x0a\x09\x09\x09aNumber._isNumber() &&\x0a\x09\x09\x09Number(self) == aNumber\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: ">",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
return self > aNumber;
return self},
args: ["aNumber"],
source: "> aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >> aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: ">=",
protocol: 'comparing',
fn: function (aNumber){
var self=this;
return self >= aNumber;
return self},
args: ["aNumber"],
source: ">= aNumber\x0a\x09\x22Inlined in the Compiler\x22\x0a\x09<return self >>= aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "@",
protocol: 'converting',
fn: function (aNumber){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(self,aNumber);
return $1;
}, function($ctx1) {$ctx1.fill(self,"@",{aNumber:aNumber},smalltalk.Number)})},
args: ["aNumber"],
source: "@ aNumber\x0a\x09^ Point x: self y: aNumber",
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "\x5c\x5c",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
return self % aNumber;
return self},
args: ["aNumber"],
source: "\x5c\x5c aNumber\x0a\x09<return self % aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "abs",
protocol: 'arithmetic',
fn: function (){
var self=this;
return Math.abs(self);;
return self},
args: [],
source: "abs\x0a\x09<return Math.abs(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "arcCos",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.acos(self);;
return self},
args: [],
source: "arcCos\x0a\x09<return Math.acos(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "arcSin",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.asin(self);;
return self},
args: [],
source: "arcSin\x0a\x09<return Math.asin(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "arcTan",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.atan(self);;
return self},
args: [],
source: "arcTan\x0a\x09<return Math.atan(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asJSON\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asJavascript",
protocol: 'converting',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st("(".__comma(self._printString())).__comma(")");
$ctx1.sendIdx[","]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJavascript",{},smalltalk.Number)})},
args: [],
source: "asJavascript\x0a\x09^ '(', self printString, ')'",
messageSends: [",", "printString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asNumber",
protocol: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asNumber\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asPoint",
protocol: 'converting',
fn: function (){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st($Point())._x_y_(self,self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"asPoint",{},smalltalk.Number)})},
args: [],
source: "asPoint\x0a\x09^ Point x: self y: self",
messageSends: ["x:y:"],
referencedClasses: ["Point"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "asString",
protocol: 'converting',
fn: function (){
var self=this;
 return String(self) ;
return self},
args: [],
source: "asString\x0a\x09< return String(self) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "atRandom",
protocol: 'converting',
fn: function (){
var self=this;
function $Random(){return smalltalk.Random||(typeof Random=="undefined"?nil:Random)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(_st(_st($Random())._new())._next()).__star(self))._truncated()).__plus((1));
return $1;
}, function($ctx1) {$ctx1.fill(self,"atRandom",{},smalltalk.Number)})},
args: [],
source: "atRandom\x0a\x09^ (Random new next * self) truncated + 1",
messageSends: ["+", "truncated", "*", "next", "new"],
referencedClasses: ["Random"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "ceiling",
protocol: 'converting',
fn: function (){
var self=this;
return Math.ceil(self);;
return self},
args: [],
source: "ceiling\x0a\x09<return Math.ceil(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "copy",
protocol: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "copy\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "cos",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.cos(self);;
return self},
args: [],
source: "cos\x0a\x09<return Math.cos(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._copy();
return $1;
}, function($ctx1) {$ctx1.fill(self,"deepCopy",{},smalltalk.Number)})},
args: [],
source: "deepCopy\x0a\x09^ self copy",
messageSends: ["copy"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "even",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__eq(self.__backslash_backslash((2)));
return $1;
}, function($ctx1) {$ctx1.fill(self,"even",{},smalltalk.Number)})},
args: [],
source: "even\x0a\x09^ 0 = (self \x5c\x5c 2)",
messageSends: ["=", "\x5c\x5c"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "floor",
protocol: 'converting',
fn: function (){
var self=this;
return Math.floor(self);;
return self},
args: [],
source: "floor\x0a\x09<return Math.floor(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "identityHash",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._asString()).__comma("n");
return $1;
}, function($ctx1) {$ctx1.fill(self,"identityHash",{},smalltalk.Number)})},
args: [],
source: "identityHash\x0a\x09^ self asString, 'n'",
messageSends: [",", "asString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isNumber",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isNumber\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "isZero",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isZero",{},smalltalk.Number)})},
args: [],
source: "isZero\x0a\x09^ self = 0",
messageSends: ["="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "ln",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.log(self);;
return self},
args: [],
source: "ln\x0a\x09<return Math.log(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "log",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.log(self) / Math.LN10;;
return self},
args: [],
source: "log\x0a\x09<return Math.log(self) / Math.LN10;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "log:",
protocol: 'mathematical functions',
fn: function (aNumber){
var self=this;
return Math.log(self) / Math.log(aNumber);;
return self},
args: ["aNumber"],
source: "log: aNumber\x0a\x09<return Math.log(self) / Math.log(aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "max:",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
return Math.max(self, aNumber);;
return self},
args: ["aNumber"],
source: "max: aNumber\x0a\x09<return Math.max(self, aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "min:",
protocol: 'arithmetic',
fn: function (aNumber){
var self=this;
return Math.min(self, aNumber);;
return self},
args: ["aNumber"],
source: "min: aNumber\x0a\x09<return Math.min(self, aNumber);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "negated",
protocol: 'arithmetic',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=(0).__minus(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"negated",{},smalltalk.Number)})},
args: [],
source: "negated\x0a\x09^ 0 - self",
messageSends: ["-"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "negative",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__lt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"negative",{},smalltalk.Number)})},
args: [],
source: "negative\x0a\x09\x22Answer whether the receiver is mathematically negative.\x22\x0a\x0a\x09^ self < 0",
messageSends: ["<"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "odd",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._even())._not();
return $1;
}, function($ctx1) {$ctx1.fill(self,"odd",{},smalltalk.Number)})},
args: [],
source: "odd\x0a\x09^ self even not",
messageSends: ["not", "even"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "positive",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__gt_eq((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"positive",{},smalltalk.Number)})},
args: [],
source: "positive\x0a\x09\x22Answer whether the receiver is positive or equal to 0. (ST-80 protocol).\x22\x0a\x0a\x09^ self >= 0",
messageSends: [">="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_(self._asString());
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Number)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: self asString",
messageSends: ["nextPutAll:", "asString"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "printShowingDecimalPlaces:",
protocol: 'printing',
fn: function (placesDesired){
var self=this;
return self.toFixed(placesDesired);
return self},
args: ["placesDesired"],
source: "printShowingDecimalPlaces: placesDesired\x0a\x09<return self.toFixed(placesDesired)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "raisedTo:",
protocol: 'mathematical functions',
fn: function (exponent){
var self=this;
return Math.pow(self, exponent);;
return self},
args: ["exponent"],
source: "raisedTo: exponent\x0a\x09<return Math.pow(self, exponent);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "rounded",
protocol: 'converting',
fn: function (){
var self=this;
return Math.round(self);;
return self},
args: [],
source: "rounded\x0a\x09<return Math.round(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sign",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._isZero();
if(smalltalk.assert($1)){
return (0);
};
$2=self._positive();
if(smalltalk.assert($2)){
return (1);
} else {
return (-1);
};
return self}, function($ctx1) {$ctx1.fill(self,"sign",{},smalltalk.Number)})},
args: [],
source: "sign\x0a\x09self isZero \x0a\x09\x09ifTrue: [ ^ 0 ].\x0a\x09self positive\x0a\x09\x09ifTrue: [ ^ 1 ]\x0a\x09\x09ifFalse: [ ^ -1 ].",
messageSends: ["ifTrue:", "isZero", "ifTrue:ifFalse:", "positive"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sin",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.sin(self);;
return self},
args: [],
source: "sin\x0a\x09<return Math.sin(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "sqrt",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.sqrt(self);
return self},
args: [],
source: "sqrt\x0a\x09<return Math.sqrt(self)>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "squared",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__star(self);
return $1;
}, function($ctx1) {$ctx1.fill(self,"squared",{},smalltalk.Number)})},
args: [],
source: "squared\x0a\x09^ self * self",
messageSends: ["*"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "tan",
protocol: 'mathematical functions',
fn: function (){
var self=this;
return Math.tan(self);;
return self},
args: [],
source: "tan\x0a\x09<return Math.tan(self);>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "timesRepeat:",
protocol: 'enumerating',
fn: function (aBlock){
var self=this;
var count;
return smalltalk.withContext(function($ctx1) { 
count=(1);
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(count).__gt(self);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileFalse_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value();
count=_st(count).__plus((1));
return count;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"timesRepeat:",{aBlock:aBlock,count:count},smalltalk.Number)})},
args: ["aBlock"],
source: "timesRepeat: aBlock\x0a\x09| count |\x0a\x09count := 1.\x0a\x09[ count > self ] whileFalse: [\x0a\x09\x09aBlock value.\x0a\x09\x09count := count + 1 ]",
messageSends: ["whileFalse:", ">", "value", "+"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:",
protocol: 'converting',
fn: function (aNumber){
var self=this;
var array,first,last,count;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1;
first=self._truncated();
$ctx1.sendIdx["truncated"]=1;
last=_st(_st(aNumber)._truncated()).__plus((1));
$ctx1.sendIdx["+"]=1;
count=(1);
array=_st($Array())._new();
_st(_st(last).__minus(first))._timesRepeat_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(count,first);
count=_st(count).__plus((1));
$ctx2.sendIdx["+"]=2;
count;
first=_st(first).__plus((1));
return first;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$1=array;
return $1;
}, function($ctx1) {$ctx1.fill(self,"to:",{aNumber:aNumber,array:array,first:first,last:last,count:count},smalltalk.Number)})},
args: ["aNumber"],
source: "to: aNumber\x0a\x09| array first last count |\x0a\x09first := self truncated.\x0a\x09last := aNumber truncated + 1.\x0a\x09count := 1.\x0a\x09array := Array new.\x0a\x09(last - first) timesRepeat: [\x0a\x09\x09array at: count put: first.\x0a\x09\x09count := count + 1.\x0a\x09\x09first := first + 1 ].\x0a\x09^ array",
messageSends: ["truncated", "+", "new", "timesRepeat:", "-", "at:put:"],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:by:",
protocol: 'converting',
fn: function (stop,step){
var self=this;
var array,value,pos;
function $Array(){return smalltalk.Array||(typeof Array=="undefined"?nil:Array)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
value=self;
array=_st($Array())._new();
pos=(1);
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
self._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(pos,value);
$ctx2.sendIdx["at:put:"]=1;
pos=_st(pos).__plus((1));
$ctx2.sendIdx["+"]=1;
pos;
value=_st(value).__plus(step);
$ctx2.sendIdx["+"]=2;
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["whileTrue:"]=1;
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(array)._at_put_(pos,value);
pos=_st(pos).__plus((1));
$ctx2.sendIdx["+"]=3;
pos;
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}));
};
$3=array;
return $3;
}, function($ctx1) {$ctx1.fill(self,"to:by:",{stop:stop,step:step,array:array,value:value,pos:pos},smalltalk.Number)})},
args: ["stop", "step"],
source: "to: stop by: step\x0a\x09| array value pos |\x0a\x09value := self.\x0a\x09array := Array new.\x0a\x09pos := 1.\x0a\x09step = 0 ifTrue: [ self error: 'step must be non-zero' ].\x0a\x09step < 0\x0a\x09\x09ifTrue: [ [ value >= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09array at: pos put: value.\x0a\x09\x09\x09\x09\x09pos := pos + 1.\x0a\x09\x09\x09\x09\x09value := value + step ]]\x0a\x09\x09ifFalse: [ [ value <= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09array at: pos put: value.\x0a\x09\x09\x09\x09pos := pos + 1.\x0a\x09\x09\x09\x09\x09value := value + step ]].\x0a\x09^ array",
messageSends: ["new", "ifTrue:", "=", "error:", "ifTrue:ifFalse:", "<", "whileTrue:", ">=", "at:put:", "+", "<="],
referencedClasses: ["Array"]
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:by:do:",
protocol: 'enumerating',
fn: function (stop,step,aBlock){
var self=this;
var value;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
value=self;
$1=_st(step).__eq((0));
if(smalltalk.assert($1)){
self._error_("step must be non-zero");
};
$2=_st(step).__lt((0));
if(smalltalk.assert($2)){
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__gt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(value);
$ctx2.sendIdx["value:"]=1;
value=_st(value).__plus(step);
$ctx2.sendIdx["+"]=1;
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)})}));
$ctx1.sendIdx["whileTrue:"]=1;
} else {
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(value).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,6)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(value);
value=_st(value).__plus(step);
return value;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,7)})}));
};
return self}, function($ctx1) {$ctx1.fill(self,"to:by:do:",{stop:stop,step:step,aBlock:aBlock,value:value},smalltalk.Number)})},
args: ["stop", "step", "aBlock"],
source: "to: stop by: step do: aBlock\x0a\x09| value |\x0a\x09value := self.\x0a\x09step = 0 ifTrue: [ self error: 'step must be non-zero' ].\x0a\x09step < 0\x0a\x09\x09ifTrue: [ [ value >= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09aBlock value: value.\x0a\x09\x09\x09\x09\x09value := value + step ]]\x0a\x09\x09ifFalse: [ [ value <= stop ] whileTrue: [\x0a\x09\x09\x09\x09\x09aBlock value: value.\x0a\x09\x09\x09\x09\x09value := value + step ]]",
messageSends: ["ifTrue:", "=", "error:", "ifTrue:ifFalse:", "<", "whileTrue:", ">=", "value:", "+", "<="],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "to:do:",
protocol: 'enumerating',
fn: function (stop,aBlock){
var self=this;
var nextValue;
return smalltalk.withContext(function($ctx1) { 
nextValue=self;
_st((function(){
return smalltalk.withContext(function($ctx2) {
return _st(nextValue).__lt_eq(stop);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}))._whileTrue_((function(){
return smalltalk.withContext(function($ctx2) {
_st(aBlock)._value_(nextValue);
nextValue=_st(nextValue).__plus((1));
return nextValue;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
return self}, function($ctx1) {$ctx1.fill(self,"to:do:",{stop:stop,aBlock:aBlock,nextValue:nextValue},smalltalk.Number)})},
args: ["stop", "aBlock"],
source: "to: stop do: aBlock\x0a\x09\x22Evaluate aBlock for each number from self to aNumber.\x22\x0a\x09| nextValue |\x0a\x09nextValue := self.\x0a\x09[ nextValue <= stop ]\x0a\x09\x09whileTrue:\x0a\x09\x09\x09[ aBlock value: nextValue.\x0a\x09\x09\x09nextValue := nextValue + 1 ]",
messageSends: ["whileTrue:", "<=", "value:", "+"],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "truncated",
protocol: 'converting',
fn: function (){
var self=this;

		if(self >= 0) {
			return Math.floor(self);
		} else {
			return Math.floor(self * (-1)) * (-1);
		};
	;
return self},
args: [],
source: "truncated\x0a\x09<\x0a\x09\x09if(self >>= 0) {\x0a\x09\x09\x09return Math.floor(self);\x0a\x09\x09} else {\x0a\x09\x09\x09return Math.floor(self * (-1)) * (-1);\x0a\x09\x09};\x0a\x09>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);

smalltalk.addMethod(
smalltalk.method({
selector: "|",
protocol: 'converting',
fn: function (aNumber){
var self=this;
return self | aNumber;
return self},
args: ["aNumber"],
source: "| aNumber\x0a\x09<return self | aNumber>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number);


smalltalk.addMethod(
smalltalk.method({
selector: "e",
protocol: 'instance creation',
fn: function (){
var self=this;
return Math.E;;
return self},
args: [],
source: "e\x0a\x09<return Math.E;>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "magnitude";
},
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "pi",
protocol: 'instance creation',
fn: function (){
var self=this;
return Math.PI;
return self},
args: [],
source: "pi\x0a\x09<return Math.PI>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Number.klass);


smalltalk.addClass('Point', smalltalk.Object, ['x', 'y'], 'Kernel-Objects');
smalltalk.Point.comment="I represent an x-y pair of numbers usually designating a geometric coordinate.\x0a\x0a## API\x0a\x0aInstances are traditionally created using the binary `#@` message to a number:\x0a\x0a\x09100@120\x0a\x0aPoints can then be arithmetically manipulated:\x0a\x0a\x09100@100 + (10@10)\x0a\x0a...or for example:\x0a\x0a\x09(100@100) * 2\x0a\x0a**NOTE:** Creating a point with a negative y-value will need a space after `@` in order to avoid a parsing error:\x0a\x0a\x09100@ -100 \x22but 100@-100 would not parse\x22";
smalltalk.addMethod(
smalltalk.method({
selector: "*",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$7,$6,$1;
$3=self._x();
$ctx1.sendIdx["x"]=1;
$5=_st(aPoint)._asPoint();
$ctx1.sendIdx["asPoint"]=1;
$4=_st($5)._x();
$2=_st($3).__star($4);
$ctx1.sendIdx["*"]=1;
$7=self._y();
$ctx1.sendIdx["y"]=1;
$6=_st($7).__star(_st(_st(aPoint)._asPoint())._y());
$1=_st($Point())._x_y_($2,$6);
return $1;
}, function($ctx1) {$ctx1.fill(self,"*",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "* aPoint\x0a\x09^ Point x: self x * aPoint asPoint x y: self y * aPoint asPoint y",
messageSends: ["x:y:", "*", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "+",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$7,$6,$1;
$3=self._x();
$ctx1.sendIdx["x"]=1;
$5=_st(aPoint)._asPoint();
$ctx1.sendIdx["asPoint"]=1;
$4=_st($5)._x();
$2=_st($3).__plus($4);
$ctx1.sendIdx["+"]=1;
$7=self._y();
$ctx1.sendIdx["y"]=1;
$6=_st($7).__plus(_st(_st(aPoint)._asPoint())._y());
$1=_st($Point())._x_y_($2,$6);
return $1;
}, function($ctx1) {$ctx1.fill(self,"+",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "+ aPoint\x0a\x09^ Point x: self x + aPoint asPoint x y: self y + aPoint asPoint y",
messageSends: ["x:y:", "+", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "-",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$7,$6,$1;
$3=self._x();
$ctx1.sendIdx["x"]=1;
$5=_st(aPoint)._asPoint();
$ctx1.sendIdx["asPoint"]=1;
$4=_st($5)._x();
$2=_st($3).__minus($4);
$ctx1.sendIdx["-"]=1;
$7=self._y();
$ctx1.sendIdx["y"]=1;
$6=_st($7).__minus(_st(_st(aPoint)._asPoint())._y());
$1=_st($Point())._x_y_($2,$6);
return $1;
}, function($ctx1) {$ctx1.fill(self,"-",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "- aPoint\x0a\x09^ Point x: self x - aPoint asPoint x y: self y - aPoint asPoint y",
messageSends: ["x:y:", "-", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "/",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
function $Point(){return smalltalk.Point||(typeof Point=="undefined"?nil:Point)}
return smalltalk.withContext(function($ctx1) { 
var $3,$5,$4,$2,$7,$6,$1;
$3=self._x();
$ctx1.sendIdx["x"]=1;
$5=_st(aPoint)._asPoint();
$ctx1.sendIdx["asPoint"]=1;
$4=_st($5)._x();
$2=_st($3).__slash($4);
$ctx1.sendIdx["/"]=1;
$7=self._y();
$ctx1.sendIdx["y"]=1;
$6=_st($7).__slash(_st(_st(aPoint)._asPoint())._y());
$1=_st($Point())._x_y_($2,$6);
return $1;
}, function($ctx1) {$ctx1.fill(self,"/",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "/ aPoint\x0a\x09^ Point x: self x / aPoint asPoint x y: self y / aPoint asPoint y",
messageSends: ["x:y:", "/", "x", "asPoint", "y"],
referencedClasses: ["Point"]
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "=",
protocol: 'arithmetic',
fn: function (aPoint){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $3,$2,$5,$4,$7,$6,$1;
$3=_st(aPoint)._class();
$ctx1.sendIdx["class"]=1;
$2=_st($3).__eq(self._class());
$ctx1.sendIdx["="]=1;
$1=_st($2)._and_((function(){
return smalltalk.withContext(function($ctx2) {
$5=_st(aPoint)._x();
$ctx2.sendIdx["x"]=1;
$4=_st($5).__eq(self._x());
$ctx2.sendIdx["="]=2;
$7=_st(aPoint)._y();
$ctx2.sendIdx["y"]=1;
$6=_st($7).__eq(self._y());
return _st($4).__and($6);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"=",{aPoint:aPoint},smalltalk.Point)})},
args: ["aPoint"],
source: "= aPoint\x0a\x09^ aPoint class = self class and: [\x0a\x09\x09(aPoint x = self x) & (aPoint y = self y) ]",
messageSends: ["and:", "=", "class", "&", "x", "y"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "asPoint",
protocol: 'converting',
fn: function (){
var self=this;
return self;
},
args: [],
source: "asPoint\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
_st(self["@x"])._printOn_(aStream);
$ctx1.sendIdx["printOn:"]=1;
_st(aStream)._nextPutAll_("@");
$1=_st(_st(self["@y"])._notNil())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(self["@y"])._negative();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
if(smalltalk.assert($1)){
_st(aStream)._space();
};
_st(self["@y"])._printOn_(aStream);
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.Point)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09\x22Print receiver in classic x@y notation.\x22\x0a\x0a\x09x printOn: aStream.\x0a\x09\x0a\x09aStream nextPutAll: '@'.\x0a\x09(y notNil and: [ y negative ]) ifTrue: [\x0a\x09\x09\x09\x22Avoid ambiguous @- construct\x22\x0a\x09\x09\x09aStream space ].\x0a\x09\x0a\x09y printOn: aStream",
messageSends: ["printOn:", "nextPutAll:", "ifTrue:", "and:", "notNil", "negative", "space"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "translateBy:",
protocol: 'transforming',
fn: function (delta){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=_st(_st(delta)._x()).__plus(self["@x"]);
$ctx1.sendIdx["+"]=1;
$1=_st($2).__at(_st(_st(delta)._y()).__plus(self["@y"]));
return $1;
}, function($ctx1) {$ctx1.fill(self,"translateBy:",{delta:delta},smalltalk.Point)})},
args: ["delta"],
source: "translateBy: delta\x0a\x09\x22Answer a Point translated by delta (an instance of Point).\x22\x0a\x09^ (delta x + x) @ (delta y + y)",
messageSends: ["@", "+", "x", "y"],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@x"];
return $1;
},
args: [],
source: "x\x0a\x09^ x",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@x"]=aNumber;
return self},
args: ["aNumber"],
source: "x: aNumber\x0a\x09x := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@y"];
return $1;
},
args: [],
source: "y\x0a\x09^ y",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
protocol: 'accessing',
fn: function (aNumber){
var self=this;
self["@y"]=aNumber;
return self},
args: ["aNumber"],
source: "y: aNumber\x0a\x09y := aNumber",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point);


smalltalk.addMethod(
smalltalk.method({
selector: "heliosClass",
protocol: 'helios',
fn: function (){
var self=this;
return "magnitude";
},
args: [],
source: "heliosClass\x0a\x09^ 'magnitude'",
messageSends: [],
referencedClasses: []
}),
smalltalk.Point.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "x:y:",
protocol: 'instance creation',
fn: function (aNumber,anotherNumber){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._x_(aNumber);
_st($2)._y_(anotherNumber);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"x:y:",{aNumber:aNumber,anotherNumber:anotherNumber},smalltalk.Point.klass)})},
args: ["aNumber", "anotherNumber"],
source: "x: aNumber y: anotherNumber\x0a\x09^ self new\x0a\x09\x09x: aNumber;\x0a\x09\x09y: anotherNumber;\x0a\x09\x09yourself",
messageSends: ["x:", "new", "y:", "yourself"],
referencedClasses: []
}),
smalltalk.Point.klass);


smalltalk.addClass('Random', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.Random.comment="I an used to generate a random number and I am implemented as a trivial wrapper around javascript `Math.random()`.\x0a\x0a## API\x0a\x0aThe typical use case it to use the `#next` method like the following:\x0a\x0a\x09Random new next\x0a\x0aThis will return a float x where x < 1 and x > 0. If you want a random integer from 1 to 10 you can use `#atRandom`\x0a\x0a\x0910 atRandom\x0a\x0aA random number in a specific interval can be obtained with the following:\x0a\x0a\x09(3 to: 7) atRandom\x0a\x0aBe aware that `#to:` does not create an Interval as in other Smalltalk implementations but in fact an `Array` of numbers, so it's better to use:\x0a\x0a\x095 atRandom + 2\x0a\x0aSince `#atRandom` is implemented in `SequencableCollection` you can easy pick an element at random:\x0a\x0a\x09#('a' 'b' 'c') atRandom\x0a\x0aAs well as letter from a `String`:\x0a\x0a\x09'abc' atRandom\x0a\x0aSince Amber does not have Characters this will return a `String` of length 1 like for example `'b'`.";
smalltalk.addMethod(
smalltalk.method({
selector: "next",
protocol: 'accessing',
fn: function (){
var self=this;
return Math.random();
return self},
args: [],
source: "next\x0a\x09<return Math.random()>",
messageSends: [],
referencedClasses: []
}),
smalltalk.Random);

smalltalk.addMethod(
smalltalk.method({
selector: "next:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st((1)._to_(anInteger))._collect_((function(each){
return smalltalk.withContext(function($ctx2) {
return self._next();
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"next:",{anInteger:anInteger},smalltalk.Random)})},
args: ["anInteger"],
source: "next: anInteger\x0a\x09^ (1 to: anInteger) collect: [ :each | self next ]",
messageSends: ["collect:", "to:", "next"],
referencedClasses: []
}),
smalltalk.Random);



smalltalk.addClass('UndefinedObject', smalltalk.Object, [], 'Kernel-Objects');
smalltalk.UndefinedObject.comment="I describe the behavior of my sole instance, `nil`. `nil` represents a prior value for variables that have not been initialized, or for results which are meaningless.\x0a\x0a`nil` is the Smalltalk equivalent of the `undefined` JavaScript object.\x0a\x0a__note:__ When sending messages to the `undefined` JavaScript object, it will be replaced by `nil`.";
smalltalk.addMethod(
smalltalk.method({
selector: "asJSON",
protocol: 'converting',
fn: function (){
var self=this;
var $1;
$1=null;
return $1;
},
args: [],
source: "asJSON\x0a\x09^ null",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "deepCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "deepCopy\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._ifNil_ifNotNil_(aBlock,(function(){
return smalltalk.withContext(function($ctx2) {
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:",{aBlock:aBlock},smalltalk.UndefinedObject)})},
args: ["aBlock"],
source: "ifNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self ifNil: aBlock ifNotNil: []",
messageSends: ["ifNil:ifNotNil:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNil:ifNotNil:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(aBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNil:ifNotNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.UndefinedObject)})},
args: ["aBlock", "anotherBlock"],
source: "ifNil: aBlock ifNotNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ aBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:",
protocol: 'testing',
fn: function (aBlock){
var self=this;
return self;
},
args: ["aBlock"],
source: "ifNotNil: aBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "ifNotNil:ifNil:",
protocol: 'testing',
fn: function (aBlock,anotherBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(anotherBlock)._value();
return $1;
}, function($ctx1) {$ctx1.fill(self,"ifNotNil:ifNil:",{aBlock:aBlock,anotherBlock:anotherBlock},smalltalk.UndefinedObject)})},
args: ["aBlock", "anotherBlock"],
source: "ifNotNil: aBlock ifNil: anotherBlock\x0a\x09\x22inlined in the Compiler\x22\x0a\x09^ anotherBlock value",
messageSends: ["value"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isImmutable\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "isNil",
protocol: 'testing',
fn: function (){
var self=this;
return true;
},
args: [],
source: "isNil\x0a\x09^ true",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "notNil",
protocol: 'testing',
fn: function (){
var self=this;
return false;
},
args: [],
source: "notNil\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "printOn:",
protocol: 'printing',
fn: function (aStream){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(aStream)._nextPutAll_("nil");
return self}, function($ctx1) {$ctx1.fill(self,"printOn:",{aStream:aStream},smalltalk.UndefinedObject)})},
args: ["aStream"],
source: "printOn: aStream\x0a\x09aStream nextPutAll: 'nil'",
messageSends: ["nextPutAll:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "shallowCopy",
protocol: 'copying',
fn: function (){
var self=this;
return self;
},
args: [],
source: "shallowCopy\x0a\x09^ self",
messageSends: [],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:",
protocol: 'class creation',
fn: function (aString,anotherString){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._subclass_instanceVariableNames_package_(aString,anotherString,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:",{aString:aString,anotherString:anotherString},smalltalk.UndefinedObject)})},
args: ["aString", "anotherString"],
source: "subclass: aString instanceVariableNames: anotherString\x0a\x09^ self subclass: aString instanceVariableNames: anotherString package: nil",
messageSends: ["subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:category:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
self._deprecatedAPI();
$1=self._subclass_instanceVariableNames_package_(aString,aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:category:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.UndefinedObject)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 category: aString3\x0a\x09\x22Kept for compatibility.\x22\x0a\x09self deprecatedAPI.\x0a\x09^ self subclass: aString instanceVariableNames: aString2 package: aString3",
messageSends: ["deprecatedAPI", "subclass:instanceVariableNames:package:"],
referencedClasses: []
}),
smalltalk.UndefinedObject);

smalltalk.addMethod(
smalltalk.method({
selector: "subclass:instanceVariableNames:package:",
protocol: 'class creation',
fn: function (aString,aString2,aString3){
var self=this;
function $ClassBuilder(){return smalltalk.ClassBuilder||(typeof ClassBuilder=="undefined"?nil:ClassBuilder)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st($ClassBuilder())._new())._superclass_subclass_instanceVariableNames_package_(self,_st(aString)._asString(),aString2,aString3);
return $1;
}, function($ctx1) {$ctx1.fill(self,"subclass:instanceVariableNames:package:",{aString:aString,aString2:aString2,aString3:aString3},smalltalk.UndefinedObject)})},
args: ["aString", "aString2", "aString3"],
source: "subclass: aString instanceVariableNames: aString2 package: aString3\x0a\x09^ ClassBuilder new\x0a\x09\x09superclass: self subclass: aString asString instanceVariableNames: aString2 package: aString3",
messageSends: ["superclass:subclass:instanceVariableNames:package:", "new", "asString"],
referencedClasses: ["ClassBuilder"]
}),
smalltalk.UndefinedObject);


smalltalk.addMethod(
smalltalk.method({
selector: "new",
protocol: 'instance creation',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._error_("You cannot create new instances of UndefinedObject. Use nil");
return self}, function($ctx1) {$ctx1.fill(self,"new",{},smalltalk.UndefinedObject.klass)})},
args: [],
source: "new\x0a\x09\x09self error: 'You cannot create new instances of UndefinedObject. Use nil'",
messageSends: ["error:"],
referencedClasses: []
}),
smalltalk.UndefinedObject.klass);

});
