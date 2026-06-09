// 9-JUNE-2026

// we already seen how to use this based on the true statement!

const userName = "Abhinav"; 
if(userName){
    console.log("Hello UserName is Present!");
}

// What if we put EMPTY String

const name = ""; // its a falsy value
if(name){
    console.log("Name is Present!");
}else{
    console.log("Name is NOT Present!"); // this will be the output
}


// Other way of writting if-else statement is the use of else-if 

const score = 100;
if(score > 200){
    console.log("Score is greater than 200");
}else if(score > 150){
    console.log("Score is greater than 150");
}else{
    console.log(`Score is ${score}`); // this will output only!
}


// some not good practice way of writting if-else is displayed below this line.
if(score === 100) console.log("Score is 100 exactly")
    
    // we can use multi line here also 
if(score === 100) console.log("Score is 100 exactly and "), console.log("We are sending more!")
    