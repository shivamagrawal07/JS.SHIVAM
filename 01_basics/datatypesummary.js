// Primitve (call by value) vs Reference (call by reference) data types in JavaScript


// primitve data types (call by value) => number, string, boolean, null, undefined, symbol, bigint)

// Primitive data types are stored in stack memory and are immutable.
// when we assign a primitive value to a variable, it creates a copy of the value. 
// When we change the value of one variable, it does not affect the other variable.

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol("12345")
const anotherId = Symbol("12345")

console.log(id === anotherId); // false

// const bigNumber = 1234567890123456789012345678901234567890n


// non primitive data types (call by reference) => object, array, function

// Non-primitive data types are stored in heap memory and are mutable.
// when we assign a non-primitive value to a variable, it creates a reference to the value. 
// When we change the value of one variable, 
// it affects the other variable because both variables are referencing the same value in memory.

const heros = ["Batman", "Superman", "Wonder Woman"]
{
    name: "shivam";
    age: 18;
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof bigNumber); // bigint


// *******************************************************************************************

// stack memory => primitive data types
// heap memory => non-primitive data types

let myName = "Shivam"
let anotherName = myName
anotherName = "Shivam agrawal"

console.log(myName); 
console.log(anotherName); 

let userone = {
    name: "Shivam",
    age: 18
}
let usertwo = userone
usertwo.name = "Shivam agrawal"   

console.log(userone.name);
console.log(usertwo.name);  
