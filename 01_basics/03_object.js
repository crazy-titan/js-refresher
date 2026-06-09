// 3-JUNE-2026


// 2-types -- singleton and object literals


// Object.create method generate the singleton


// Symbols - unique ids

const mySym = Symbol("Key1")

// object literals - no singleton formed

const myObj = {
    "name": "Abhinav", // original representation, but you can write like name: "Abhinav" 
    "email": "contact@meetabhinav.com",
    "location": "Earth",
    "isLoggedIn": true,

    // add a Symbol which is defined above the myObj
    [mySym]: "myKey1", // syntax from documentation

    // access the keys using dot 

    // add a function inside this object
};

// console.log(myObj.name); // this is not good way to access

// console.log(myObj["email"]); // better way to understand 

// console.log(myObj[mySym]);  // access the Symbol now

// add a greeting function inside myObj

myObj.greeting = function(){
    console.log("Hello from Tech")
}


// When to use 'this' keyword, when we want to reference the same object 

myObj.greetingTwo = function(){
    console.log(`Hello from Tech ${this.name}`); // string interpolation
}

// console.log(myObj.greeting());
// console.log(myObj.greetingTwo());

// console.log(myObj);

// Object.freeze(myObj); // now you can't add anything into the myObj
