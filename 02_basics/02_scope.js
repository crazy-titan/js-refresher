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
