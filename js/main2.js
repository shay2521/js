//variable dedclaration

var myName='Keyur';
var myAge;
console.log(myName);
console.log(myAge);

//let-declare a variable
let yourName = 'Student';
let yourAge;

console.log(yourName);
console.log(yourAge);


//reassign var and let

myName= 'Tony Stark';
yourName= 'Bruce Wayne';
console.log(myName, yourName);


//Block Scoping

if (true){
    var test1= 'This a test';
    let test2= 'This is also a test';
    console.log('Hello');
}

console.log(test1);
//console.log(test2) **ERROR


// //constant declaration

// //similar  to let(block scoped and cant be reassigned either)

// // const myCurrentAge=99;
// // console.log(`my current age is ${myCurrentAge}`);

// // const myBirthday = true;

// // if (myBirthday){
// //     console.log("Happy Birthday");
// //     myCurrentAge +=1;
// //     console.log(`My current age: ${myCurrentAge}`);
// // }

let myCurrentAge = 24
console.log(`My age as of now is ${myCurrentAge}`)

const myBirthday = true;

if (myBirthday){
    console.log('Happy Birthday')
    myCurrentAge += 1 //Error
    console.log(`My age as of now is ${myCurrentAge}`)
};

// const dec with non-primitive types

