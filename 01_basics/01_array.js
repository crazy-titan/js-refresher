// 2-JUNE-2026


// square brackets []
// braces or curly braces {}
// small brackets or parentheses ()


const myArray = ["HI",1,true,{}];
// console.log(myArray)


const myNewArray = new Array(1,2,4,54);  // automatically square brackets added
// console.log(myNewArray)


// Array Methods
myNewArray.push(1); // add to end
//sole.log(myNewArray);

myNewArray.pop(); // delete from end
// console.log(myNewArray);

myNewArray.unshift(8); // add at front
// console.log(myNewArray);

myNewArray.shift(); // delete from front
// console.log(myNewArray);


// slice and splice


// slice - no change in original array

// console.log("A: ", myNewArray);
const myArr1 = myNewArray.slice(1,3);
// console.log("B: ",myArr1);
// console.log("C: ",myNewArray);


// splice - changes the original array

// console.log("A: ",myNewArray);
const myArr2 = myNewArray.splice(1,3);
// console.log("B: ",myArr2);
// console.log("C: ",myNewArray);