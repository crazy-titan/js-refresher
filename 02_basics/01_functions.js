// 4-JUNE-2026

function addTwoNumber(num1,num2){
    return num1 + num2;
}
 
const result = addTwoNumber()
// console.log(result) // NaN

const resultTwo = addTwoNumber(2,4)
// console.log(resultTwo) // 6

const resultThree = addTwoNumber(3,"a")
// console.log(resultThree) // 3a     -    not good , always check the arguments which is coming


// if-else and default parameter-placeholder

function myFunction(name = "Abhinav"){
    return `${name} just logged in!`
}
// console.log(myFunction()); // Abhinav just logged in!
// console.log(myFunction("insideTech")); // insideTech just logged in!


// we can also use if-else

// if(name === undefined){
//     console.log('Please enter your name!')
//     return // directly come out of global scope
// }

// no argument is treated as 'undefined'


// adding price of cart is tricky - beacuse you don't know how many arguments are coming!
// we use rest operator ... same as spread operator

function totalPriceOfCart(...carts){
    return carts; // Arrays
}
// console.log(totalPriceOfCart(200,100,300))


// passing objects and array inside a function

const myObject = {
    "name": "Abhinav",
    "email": "contact@meetabhinav.com",
    isloggedIn: true
}

function myFunctionOne(anyObject){
    return `My name is ${anyObject.name} and email is ${anyObject.email}`
}
// console.log(myFunctionOne(myObject));
// you can also pass the object directly into the function argument as ( {} )


// Same for the Arrays

const myArray = [100,200,34];

function returnSecondValue(anyArray){
    return anyArray[1];
}
// console.log(returnSecondValue(myArray));
// you can also pass the array directly into the function's argument as ( [] )
