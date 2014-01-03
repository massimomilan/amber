define("amber_core/Kernel-Transcript", ["amber_vm/smalltalk", "amber_vm/nil", "amber_vm/_st", "amber_core/Kernel-Objects"], function(smalltalk,nil,_st){
smalltalk.addPackage('Kernel-Transcript');
smalltalk.packages["Kernel-Transcript"].transport = {"type":"amd","amdNamespace":"amber_core"};

smalltalk.addClass('ConsoleTranscript', smalltalk.Object, ['textarea'], 'Kernel-Transcript');
smalltalk.ConsoleTranscript.comment="I am a specific transcript emitting to the JavaScript console.\x0a\x0aIf no other transcript is registered, I am the default.";
smalltalk.addMethod(
smalltalk.method({
selector: "clear",
protocol: 'printing',
fn: function (){
var self=this;
return self},
args: [],
source: "clear\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "cr",
protocol: 'printing',
fn: function (){
var self=this;
return self},
args: [],
source: "cr\x0a\x09\x22no op\x22",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
return self},
args: [],
source: "open",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);

smalltalk.addMethod(
smalltalk.method({
selector: "show:",
protocol: 'printing',
fn: function (anObject){
var self=this;
console.log(String(_st(anObject)._asString()));
return self},
args: ["anObject"],
source: "show: anObject\x0a\x22Smalltalk objects should have no trouble displaying themselves on the Transcript; Javascript objects don't know how, so must be wrapped in a JSObectProxy.\x22\x0a<console.log(String(_st(anObject)._asString()))>",
messageSends: [],
referencedClasses: []
}),
smalltalk.ConsoleTranscript);


smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
function $Transcript(){return smalltalk.Transcript||(typeof Transcript=="undefined"?nil:Transcript)}
return smalltalk.withContext(function($ctx1) { 
_st($Transcript())._registerIfNone_(self._new());
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},smalltalk.ConsoleTranscript.klass)})},
args: [],
source: "initialize\x0a\x09Transcript registerIfNone: self new",
messageSends: ["registerIfNone:", "new"],
referencedClasses: ["Transcript"]
}),
smalltalk.ConsoleTranscript.klass);

});
