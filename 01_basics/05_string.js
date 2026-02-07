const name = "Shivam"
const repocount = "1000"

// console.log(name + repocount + "value"); // Shivam1000value

console.log(`Hello ${name}, your repo count is ${repocount}`);

const gameName = new String (`shivam`)
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.slice(0, 4));
console.log(name.replace("Shivam", "Shivam Kumar"));
console.log(gameName.charAt(2));
console.log(gameName.indexOf("v"));

constnewString = gameName.substring(0, 4);
console.log(constnewString);    

constanotherstring = gameName.slice(-8, 4);
console.log(constanotherstring);

constnewStringOne = "      shivam       "
console.log(constnewStringOne);
console.log(constnewStringOne.trim());


const url = "https://www.google.com/search?q=shivam+github&oq=shivam+github&aqs=chrome..69i57j0i512l9.1221j0j7&sourceid=chrome&ie=UTF-8"

console.log(url.replace(`chrome`, `firefox`));

