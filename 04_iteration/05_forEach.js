// 11-JUNE-2026

// mostly used loops on Array!
const myDB = [
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

myDB.forEach((keys) => {
    // console.log(keys); // will output all of the objets individually 
});

// one tricky things
function printMe(item){
    console.log(item)
}
// myDB.forEach(printMe); // same as previous output

// forEach have 3 parament item,index and array

myDB.forEach((item,index,arr)=>{
    // console.log(item,index,arr); // will output value, index of those values and full array
})

