// 10-JUNE-2026

// While loop - All loops consists of initialisation , condition checking and increament/decreament

let myArray = ['Hello',"Abhinav","InsideTech"];
let arr = 0;

while(arr < myArray.length){
    console.log(`Values of array ${myArray[arr]}`)
    arr = arr + 1;
}

// Do While loop

let score = 10;
do {
    console.log(`Value is ${score}`)
    score = score + 2;
} while (score <= 20);