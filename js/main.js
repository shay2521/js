console.log('Hello This is main.js')

//Baasics of JS

/* Multiline comment in JS
--variable declaration in js -- 
*/

// Declaring a string type

var myName = 'Keyur'; 

console.log(myName);
console.log(typeof myName);


//strings can be deliminated
console.log('My name is ${myName}');
console.log("My name is ${myName}");
console.log(`My name is ${myName}`);


//declare with no value
var myAge;
console.log(myAge);

myAge=24;
console.log(myAge);
console.log(typeof(myAge));

//floats in js
var pi = 3.1415
console.log(pi);
console.log(typeof(pi));

//BOOLEANs

var someBool = true;
var anotherBool = false;

console.log(someBool, anotherBool);
console.log(typeof(someBool), typeof(anotherBool));

//undefined type
var something;
console.log(something);

//null datatype
var nullThing= null;
console.log(nullThing);
console.log(typeof(nullThing));


//object types
//create obj
var person1={};
console.log(person1)
console.log(typeof(person1));

var person2= {
    first: 'Keyur',
    last: 'Patel',
    age: 24,
    address:{
        street: '123 w 3rd',
        city: 'Chicago'
    }
};

console.log(person2)
console.log(typeof(person2));

//access data within obj
////bracket notation

console.log(person2['age']);
console.log(person2['last']);

//dot notation
console.log(person2.age);
console.log(person2.address.city);


//array type
var mycoolarray=[10,20,30, 'Keyur', true, null, undefined, [1,2,3], {test: 'test123'}];
console.log(mycoolarray)
console.log(typeof(mycoolarray));

console.log(mycoolarray[2]);

function test(){};
console.log(test);
console.log(typeof test);




