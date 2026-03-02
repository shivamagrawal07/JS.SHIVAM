// let myName = "shivam"
// let myChannel = "chai"

// console.log(myName.trueLength);


let myHeros = ["thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getspierPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.shivam = function(){
    console.log(`shivam is present in all language`);
}

Array.prototype.heyshivam = function(){
    console.log(`shivam says hello`);
}

// heroPower.shivam()
// myHeros.shivam()
// myHeros.heyshivam()
// heroPower.heyshivam()

//Inheritance

const user = {
    name: "pari",
    email: "pari@google.com"
}

const teacher = {
    makeVideo: true
}

const teachingsupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: `JS Assignment`,
    fulltime: true,
    __proto__: teachingsupport
}

teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(teachingsupport, teacher)

let anotherusername = "chaiaurcode    "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true length is: ${this.trim().length}`);
}

anotherusername.truelength()
"shivam".truelength()
"icetea".turelength()