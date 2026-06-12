// 12-JUNE-2026

// check wheather the "forEach" method return anything or not?

const myArray = [1,2,3,4,5]
// myArray.forEach((item)=>{
//     return item; // it will not return anything! 
// })

// check with expression method
const newArray = myArray.forEach((item)=>{
    return item; // it will not return anything! 
})
console.log(newArray); // it will output as "Undefined", that's the PROBLEM nothing gets returned by using "forEach"

// what's the solution of this? -- Use "filter" method

// What's the syntax of filter? -- use the callback and give the basis of condition you want to filter!
// "filter" actually returns the values.

const myNewArray = [11,12,13,14,15]
const filterArray = myNewArray.filter((item)=>(item > 12))
console.log(filterArray); // will output the values 13,14 and 15.

// now its all your javascript knowledge to impliment the conditions and get you desired output!

// But can we do the return like filter by using "forEach"? Yes absolutely.

const myForeachArray = [];

const pushFormArray = [1,2,3,4,5,6,7,8,9]
pushFormArray.forEach((item)=>{
    // apply the conditionals
    if(item > 5){
        myForeachArray.push(item);
    }
})
console.log(myForeachArray); // this will give you output of [6,7,8,9]
