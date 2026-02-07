// singleton
// object.create

// object literal

const mysym =Symbol("key1")

const jsuser = {
    name: "Shivam",
    fullname: "Shivam Agrawal",
    [mysym]: "myvalue", 
    age: 22, 
    hobbies: ["coding", "gaming", "travelling"],
    isloggedIn: true,
    lastlogindays: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(jsuser.age)
// console.log(jsuser.fullname)
// console.log(jsuser[mysym])


jsuser.age = 23
// Object.freeze(jsuser)   //freeze the object, now we can't change any value of the object
jsuser.age = 24
// console.log(jsuser.age)   //age will remain 23 because the object is frozen

jsuser.greeting = function(){
    console.log("hello JS user");
}

jsuser.greetingtwo = function(){
    console.log(`hello JS user ${this.name}`);
}
console.log(jsuser.greeting()) 
console.log(jsuser.greetingtwo())   //undefined because we added the method to console object not to jsuser object   