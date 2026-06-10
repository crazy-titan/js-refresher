// 10-JUNE-2026

// for loop

for (let i = 0; i < 5; i++) {
    const element = i;
    console.log(`Value is ${i}`);
}

// nested for loop

for (let i = 0; i < 5; i++) {
    console.log(`We are on line ${i}`)
    for (let j = 0; j < 3; j++) {
        console.log(`line ${i} and inner Line is ${j}`)
    }
}

// BREAK and CONTINUE
for (let i = 0; i < 5; i++) {

    console.log(`We are at ${i}`)
    if(i == 4){
        console.log(`We have detected 4`)
        break;
    }
}


for (let i = 0; i < 7; i++) {

    if(i == 4){
        console.log(`We left 4`)
        continue;
    }
    console.log(`We are at ${i}`)
}