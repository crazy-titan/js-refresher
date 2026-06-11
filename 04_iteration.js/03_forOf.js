// 11-JUNE-2026

// 'For of' loop -- it will directly print the values not the keys!

// ["","",""] or [{},{},{}] 

// Apply on array
const myArray = [2, 3, 4, 5, 6]
for (const values of myArray) {
    // console.log(values); // will output the values 2,3,4,5,6
}

// Apply on array of strings
const newArray = ["Js","py","cpp"]
for (const val of newArray) {
    // console.log(val); // will output the val js,py and cpp
}

// apply on array of objects
const myObjArray = [
    {
        name: "InsideTech",
        email: "contact@meetabhinav.com"
    },
    {
        name: "Javascript",
        email: "contact@gmail.com"
    },
    {
        name: "Python",
        email: "contact@com.com"
    },
]
for (const obj of myObjArray) {
    // console.log(obj); // will output the list of objects seperately!
    // console.log(myObjArray[obj]); // will give you 'undefined' because you can't have keys or index in 'for of' loop
}

// apply on objects now
const myObject = {
    language: "Javascript",
    shortName: "js",
    browser: "chorme",
    compary: "very poor"
}
// for (const val of myObject) {
//     // console.log(val); // this throws an error of 'myObject is not iterable'
// }

// Let's talk about Map
const myMap = new Map();
myMap.set("js","Javascript")
myMap.set("py","python")
myMap.set("ts","typescript")

// for (const key of myMap) {
//     console.log(key); // will output as [key,value]
// }

// how to output only the values? --> destructuring
for (const [key,value] of myMap) {
    // console.log(key,':-', value); // now you will see as key and value
}

// can we apply map on objects? -- NO , we will use 'for in' loop for that