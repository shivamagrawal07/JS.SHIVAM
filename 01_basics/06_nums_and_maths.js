const score =700;
console.log(score);

const balance =new Number (10000);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber = 123.4567;
console.log(othernumber.toPrecision(4));

const hundered = 1000000;
console.log(hundered.toLocaleString("en-IN"));


// ************************************* Maths ***************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 5, 6, 7, 8));
console.log(Math.max(4, 5, 6, 7, 8));
console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
