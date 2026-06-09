// 9-JUNE-2026

// sometime we didn't compare values but we can go inside the if-else using TURTHY Values

// TRUTHY Values
// 1, true, [], {}, " ", "0", "Anything", function(){}


// FALSY Values
// "", 0, false, null, undefined, NaN, -0


// nullish coalescing ?? operator and OR || operator

// const count = 0;
// const defaultCount = count || 10;
// console.log(defaultCount); // 10 (Bug! We wanted count to be 0)

const count = 0;
const defaultCount = count ?? 10; 
console.log(defaultCount); // 0 (Correct! 0 is not null or undefined)


// Ternary Operator ?
// this '?' is different from '??' 

// ? is the simple way to write if-else statements

const isLoggedIN = true;
const message = isLoggedIN ? console.log("Yes System is LoggedIn!") : console.log("No System is not LoggedIN!");