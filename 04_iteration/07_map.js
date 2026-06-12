// 12-JUNE-2026

// now let's understand another method which is known as "Map" this also return the value just like the filter
// but here mentioning the condition is not mendatory because it return all!

const myArray = [1,2,3,4,5];

let returnValues = myArray.map((nums)=>(nums + 1))
console.log(returnValues); // this will output as 2,3,4,5,6

// CHAINING -- using multiple methods at same time
returnValues = myArray.map((item)=> (item * 10)).map((val)=>(val + 1)).filter((nums)=>(nums > 20))
console.log(returnValues); // will give you values as 21,31,41,51

