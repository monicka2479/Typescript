// boolean
var isHuman:boolean = true;
//console.log(isHuman)

//number
var myNumber:number=22;
//console.log(myNumber)

//string
var myString:string="Welcome";
//console.log(myString)

//array
var myArray1:string[]=["hai", "welcome", "Thanks"];
//console.log(myArray1)

//array any type
var myArray2:any[]=["hai", 1, "Thanks"];
//console.log(myArray2)

//array any type
var myArray2:any[]=["hai", 1, "Thanks"];
//console.log(myArray2)

//tuple
let myTuple:[string,number] = ["one",1];
// console.log(myTuple)

//enum
enum players {
    virat = 12,
    sachin = 10,
    Dhoni = 7
}

let viratJersy = players.virat;
// console.log('virat jersy no: '+ viratJersy);

//any
let myNum:any = "two";
console.log(myNum);

//void
let myUndefinedVar: void = undefined;
// console.log('myUndefinedVar '+ myUndefinedVar);

//type assertion
let code: any = 123; 
let employeeCode = <number> code; 
//console.log(typeof(employeeCode)); 


//union
let val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)