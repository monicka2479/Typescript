 
 //object contains property
var person = {
     firstName : "Monicka",
     lastName: "Akilan"
 }

// console.log(person.firstName);
// console.log(person.lastName);

//object contains property and function
 
var person1 = {
     firstName : "Monicka",
     lastName: "Akilan",
     sayHello1: function() {}
 }
 person1.sayHello1 = function(){
     console.log("function says: "+ person.firstName);
 }

 // person1.sayHello1();


 //Objects as function parameters
 var person2 = {
    firstName : "Monicka",
    lastName: "Akilan",
}

var callPerson = function(obj:{firstName:string, lastName:string}) {
    console.log("callPerson firstName: "+ obj.firstName);
    console.log("callPerson lastName: "+ obj.lastName);
}
var callPerson2 = function(obj) {
    console.log("callPerson2 firstName: "+ obj.firstName);
    console.log("callPerson2 lastName: "+ obj.lastName);
}

//callPerson(person2);
//callPerson2(person2);


 //Anonymous Objects
var callPerson3 = function(obj:{firstName:string, lastName:string}) {
    console.log("callPerson3 firstName: "+ obj.firstName);
    console.log("callPerson3 lastName: "+ obj.lastName);
}
callPerson3({firstName:"Monicka", lastName:"Akilan"});