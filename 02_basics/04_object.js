// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "shiva"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularuser = {
    email: "shivamagrawal041@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname: "agrawal"
        }
    }
}

// console.log(regularuser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}   

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const user = [
    {
    id: 1,
    name: "shivam",
    age: 22,  
    },
    {
    id: 2,
    name: "agrawal",
    age: 21,  
    },
]
user[1].name
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));   

console.log(tinderuser.hasOwnProperty("name"));