// 12-JUNE-2026

// REDUCE method is the well know method mostly used and very impressive! UseCase like adding the total cart price

// SYNTAx is very simple you just need to give an intial value and an accumulator and currentValue is pick by iteration.

const cartItemPrice = [21,34,656,45,60]
const initialValue = 0; // cart at beginning

const TotalPrice = cartItemPrice.reduce((accumulator,currentValue)=>(accumulator + currentValue),initialValue)
console.log(TotalPrice); // will output you the totalPrice

// How this is working?

// -- On first iteration accumulator gets the initialValue and currentValue get first value of Array! 
// -- On second iteration accumulator gets the addition of accumulator + currentValue from the first iteration
// -- and this keep on going....
