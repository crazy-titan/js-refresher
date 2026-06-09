// 8-JUNE-2026

// Scope --> fucntion + { }


if(true){
    let num = 19;
    const num1 = 4;
    var num2 = 3;
}

console.log(num2); // will print 3 as output which is not good at all, we will never use 'var' as variable.
console.log(num,num2) // error not defined as they are inside the if statement's scope

// KIM(Keep in Mind)

// Browser environment always gives a different scope, where as NODE environment gives different scope.


// Nested scope and Closers

if(true){
    const userName = "Abhinav";
    if(userName === "Abhinav"){
        const title = " LOL";
        console.log(userName+title)
    }
    console.log(title); // give error because its outside the scope of nested if
}
console.log(userName); // give error beacuse its also outside the scope of parent if


// Intersting things about Functions


// we can access this type of function declaration from the top also

addOne(4) // this will output as 5.
function addOne(num){
    return num + 1;
}
// addOne(5); // will give no output after execution because we are not printing the returned value.


// 'Expression' way to define a function 

// addTwo(6); // we can't do this because of 'hosting' and we stored the function inside a variable
// so we can't access it before defining it!!!!
const addTwo = function(num){
    return num + 2;
}
addTwo(6); // this will output as 8
