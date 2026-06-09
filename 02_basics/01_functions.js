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

if(name === undefined){
    console.log('Please enter your name!')
    return // directly come out of global scope
}

// no argument is treated as 'undefined'