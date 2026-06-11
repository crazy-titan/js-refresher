// 11-JUNE-2026

// for in loop, let's see for the objects
const myObject = {
    language: "Javascript",
    shortName: "js",
    browser: "chorme",
    compary: "very poor"
}
for (const key in myObject) {
    // console.log(key); // this will get all the keys of defined myObject
    // console.log(myObject[key]);  // this will give you the values of keys!
}

// let's apply at array of objects(DATABase Usecase senerio)
const myArrayOfObjects = [
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

for (const key in myArrayOfObjects) {
    // console.log(key); // will print the index
    // console.log(myArrayOfObjects[key]); // this will get you the access of individual objects
    // console.log(myArrayOfObjects[key].key); // undefined
    console.log(myArrayOfObjects[key].name); // easy accessing the objects inside values
}

// for in loops can't be functional on 'Map'
