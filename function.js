// Description: make and execute functions to do th1ngs
// NTS = note to self
// Found this on: https://nodejs.org/en/knowledge/javascript-conventions/how-to-create-default-parameters-for-functions/
//Start of function "He110"
const He110 = function () {
console.log('Hell0, Wor1d1!');
}
//End of function "He110"



//Start of function "He110Arg"
const He110Arg = function (optionalArg) {
//On undefined arg print dis "No parameter was passed"
if (optionalArg === undefined) {
optionalArg = "No parameter was passed";
//NTS: a limit or boundary which defines the scope of a particular process or activity.
}
//If arg is "test" print "could be a command in the future"
if (optionalArg === "test") {
console.log("could be a command in the future");
}
//Print "no parameter was passed"
console.log(optionalArg);
}
//End of function "He110Arg"





//Do the functi0n thing
He110();
//Do the function thing but with args
He110Arg();

//Tell the function thing an arg 
He110Arg("A");
He110Arg("test");
