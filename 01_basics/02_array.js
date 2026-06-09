// 2-JUNE-2026


// Push - output in same array

const marvel_heros = ['ironman','spiderman','thor'];
const dc_heoros = ['superman','batman','flash'];
// marvel_heros.push(dc_heoros)
// console.log(marvel_heros); // add into marvel_hero array


// Concat - output in new array

const all_heros = marvel_heros.concat(dc_heoros);
// console.log(all_heros);


// Spread operator [...] Recommended

const all_new_heros = [...marvel_heros, ...dc_heoros]
// console.log(all_new_heros);
