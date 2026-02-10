// var c=300; //global scope
let a =100; //function scope
if(true){                
    let a =10;             //block scope
    const b =20;
    console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
// console.log(c);