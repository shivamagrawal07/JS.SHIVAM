function sayMyname() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
}

// sayMyname() // function call or function invocation  //sayMyname is a function reference // sayMyname() is a function invocation or function call


// function addTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2) {

    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}


const result = addTwoNumbers(10, 20); // function call or function invocation

// console.log("Result: ", result); // undefined   

function loginuserMessage(username) {
    if(!username){
        console.log("please enter username");
        return; // it will stop the execution of the function
    }    
    return `${username} welcome back!`;
}       

// console.log(loginuserMessage("Shivam")); // function call or function invocation
// console.log(loginuserMessage("shivam")); // function call or function invocation


function calculatecartprice (val1, val2, ...num1) {  //...num1 is rest operator which will take all the arguments and store it in an array
    return num1
}

// console.log(calculatecartprice(100, 200,1000,2000)); // function call or function invocation

const user = {
    username: "Shivam",
    passwords: "123456"
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and password is ${anyobject.password}`)
}

// handleObject(user); // function call or function invocation
handleObject({
    username: "sam",
    password: "789123"
}); // function call or function invocation


const myNewArray = [1, 2, 3, 4, 5];

function returnSecondValue(getArray) {
    return getArray[1];
}

 console.log(returnSecondValue(myNewArray)); // function call or function invocation
