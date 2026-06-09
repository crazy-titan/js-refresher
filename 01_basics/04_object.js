// 3-JUNE-2026

// SingleTon using 'new' keyword

// const myObj = new Object(); 

const myObj = {};


// Above line 5 and 7 both will give empty object on console.

// add some data inside myObj

myObj.name = "Abhinav"
myObj.email = "contact@meetabhinav.com"
myObj.isLoggedIn = true

// console.log(myObj)


// add multiple objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1, obj2}; // not the good appraoch

// const obj3 = Object.assign(obj1,obj2); // not the good approach
// const obj3 = Object.assign({}.obj1,obj2); //  good approach to return in new object

// we will use spread operatin again just like we did in Array(BEST APPROACH)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// method to use the key,values and entites of object

console.log(Object.keys(obj3)); // will show all key in ARRAY 

console.log(Object.values(obj3)); // will show all values in ARRAY 

console.log(Object.entries(obj3)); // will give the ARRAY of ARRAY in key:value pain.


// Object de-structuring - curly braces {}

const myNewObj = {
    name: "InsideTech",
    email: "contact@meetabhinav.com",
    instructor: "Docs"
}

// now how to destructure the objects keys

// myNewObj.instructor to access the key but this is not recommended if you have to 
// use this instructor key at many locations

// Solution
const {instructor} = myNewObj;

// now object gets destructured 
console.log(instructor); // it will print Docs


// we will see this concept more indepth inside handling API and data coming from database!

// Database response comes in array of Objects.
