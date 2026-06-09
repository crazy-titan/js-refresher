// 8-JUNE-2026

// 'this' inside object and fucntions && inside node and browser environment

const myObject = {
    username: "InsideTech",
    isLoggedIn: true,
    welcomeMessage: function(){
        // console.log(`${username}, Welcome to github codebase`); // not the good approach to access object context
        console.log(`${this.username}, welcome to github codebase`); // best way to access

        console.log(this); // will give you the object context 
    }
}
console.log(this); // will give you 'empty' object because its in NODE Environment

// If you take this 'console.log(this)' inside the BROWSER Environment it will give you WINDOW Object.


// Let's execute the object's function now 
myObject.welcomeMessage() // will give the object context!


// Let's use 'this' inside a regular function to see how it behaves inside it
function addTwo (num1,num2){
    const number = 5;
    console.log(num1 + num2);
    console.log(this); // will output some data but didn't the context of function
}
addTwo(3,5)

// Let's use 'this' inside an expression function to see how it behaves inside it 
const newTwo = function(num1,num2){
    console.log(this); // same thing like previous function, but not the context of function
}
newTwo(3,5)


// Different way to define functions (ARROW Function)
const newFunction = () => {
    console.log(this);
    return 3;
}
newFunction(); // will output any empty object. So, we can say 'this' only show context in OBJECT.


// Explict, Implict and Object returns type of functions

// Explict return, as name suggest explict mention the return inside { }
()=>{
    return 1;
}

// Implict return , remove the { } and return keyword and wrap inside ( )
() => (num1 + num2);

// How to return an Object in Arrow Function?

// No issue just wrap the { } inside a ( )
const myFunction = ()=>({country: India})


// IIFE (Immediately Invoked Function Expressions)

// Sometime Global scope's variable do polution , to avoid such problem we use IIFE

// Syntax ()();

//Named IIFE --> "iifeFunction"
(function iifeFunction(){
    console.log(`DB connected`);
})()   

; // Very Important Semi-colon

// Simple IIFE --> NO Name
// Arrow function IIFE
( ()=>{
    console.log(`DB connected TWO`);
} )();


// Pass Parameter and call with Argument --> Nothing to worry, treat as "function calling"

(function paramFunction(name){
    console.log(`Hello, ${name}`)
})("Abhinav");     // will output as Hello, Abhinav