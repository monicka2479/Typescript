// boolean
var isHuman = true;
//console.log(isHuman)
//number
var myNumber = 22;
//console.log(myNumber)
//string
var myString = "Welcome";
//console.log(myString)
//array
var myArray1 = ["hai", "welcome", "Thanks"];
//console.log(myArray1)
//array any type
var myArray2 = ["hai", 1, "Thanks"];
//console.log(myArray2)
//array any type
var myArray2 = ["hai", 1, "Thanks"];
//console.log(myArray2)
//tuple
var myTuple = ["one", 1];
// console.log(myTuple)
//enum
var players;
(function (players) {
    players[players["virat"] = 12] = "virat";
    players[players["sachin"] = 10] = "sachin";
    players[players["Dhoni"] = 7] = "Dhoni";
})(players || (players = {}));
var viratJersy = players.virat;
// console.log('virat jersy no: '+ viratJersy);
//any
var myNum = "two";
console.log(myNum);
//void
var myUndefinedVar = undefined;
// console.log('myUndefinedVar '+ myUndefinedVar);
//type assertion
var code = 123;
var employeeCode = code;
//console.log(typeof(employeeCode)); 
//union
var val;
val = 12;
console.log("numeric value of val " + val);
val = "This is a string";
console.log("string value of val " + val);
