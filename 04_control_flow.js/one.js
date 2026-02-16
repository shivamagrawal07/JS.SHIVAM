// if

const isuserloggedin = true
const temperature = 41

// if(temperature === 41){
//     console.log("less tha 50");
// }else{
// console.log("temparature is greater than 50")
// }

// // <, >, >=, <=, ==, !=, ===, !==

// const score = 200

// if (score > 100){
//     const power ="fly"
//     console.log(`user power: ${power}`);
// }
//  console.log(`user power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500){
//     console.log("less than");

// } else if (balance  < 750){
//    console.log("less than 750");

// }else if (balance < 900){
//     console.log("less than 750");

// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLoggedIn && debitcard && 2==3){        //all conditons are true
    console.log("allow to buy course");
}

if(LoggedInFromGoogle || LoggedInFromEmail){   //only one condition is given true.
   console.log("user logged in");
}