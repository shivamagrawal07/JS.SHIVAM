const user ={
    username : "shivam",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }

 }
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);   //when we in node environment then it refers to empty{} object.


// function one() {
//     let username = "shivam"
//     console.log(this.username); 
// }

// one()


// constone =  function() {
//     let username = "shivam"
//     console.log(this.username); 
// }

constone = () => {
    let username = "shivam"
    console.log(this.username); 
}

// one()

// const addtwo = (num1 , num2) => {                   //if {} uses then write return keyword
//     return num1 + num2
// }

const addtwo = (num1 , num2) =>  num1 + num2      //Implicit return     // if{} not used then do not write return keyword
 console.log(addtwo(3,4))



// const myArray = [2, 5, 7, 8, 9]
// myArray.foreach(function () {})
