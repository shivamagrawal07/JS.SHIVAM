// var c=300; //global scope
let a =100; //function scope
if(true){                
    let a =10;             //block scope
    const b =20;
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one (){
    const username = "shivam";

    function two(){
        const website = "www.google.com";
        console.log(username)
    }
    // console.log(website);
    two()

}
// one()

if (true){
    const username ="shivam"
    if (username === "shivam"){
        const website = "youtube";
        // console.log(website + username);
    }
    // console.log("website");
}
// console.log("username");

// +++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num+1
}

console.log(addone(5))


const addtwo = function(num){
    return num+2
}

console.log(addtwo(5))
