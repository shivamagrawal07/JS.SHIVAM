const marvel_Heros = ["Spiderman", "Ironman", "Thor", "Hulk", "Captain America"]     
const dc_Heros = ["Batman", "Superman", "Wonder Woman"]  

// marvel_Heros.push(dc_Heros)

// console.log(marvel_Heros);
// console.log(marvel_Heros[3][1]);

// const all_Heros = marvel_Heros.concat(dc_Heros)
// console.log(all_Heros);

const all_new_Heros = [...marvel_Heros, ...dc_Heros]
// console.log(all_new_Heros); 

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [8, 9, 10]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("shivam"))
console.log(Array.from("shivam"))
console.log(Array.from({"name": "shivam"}))   //interesting 


let scr1 = "Hello"
let scr2 = "World"
let scr3 = "Hello World"

console.log(Array.of(scr1, scr2, scr3));   //Return a new Array from a set of elements.
