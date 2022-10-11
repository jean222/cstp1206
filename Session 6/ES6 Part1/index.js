

// This Keyword

const { getSystemErrorName } = require("util");


// This keyword refers to the current object that's ---> name

var name = "Jean"
let obj = {
    name: "Jean",
    getName: function() {
        console.log(this.name);
    }
}

obj.getName();

// Main difference is based on this keyword

var game = "Call of Duty"
let obj2 = {
    user: "Apex",
    getGame: () => {    // By using the arrow funciton, the reference changes to global object
        console.log(this.game);
    }
}

obj.getGame();  // Call of Duty



let student = {
    name: " Jean",
    college: "VCC",
    city: "Toronto",
    address: {
        city: "Vancouver",
        province: "BC",
        getCity: function() {
            console.log(this.city)
        }
    }
}

// HOISITING***************************

// HOISTING IN VAR KEYWORD

console.log(collegeName);   // Undefined


var collegeName = "VCC";

//------------ The above representaion will be written by parse as below and that's why is is undefined

var collegeName;

console.log(collegeName); // uNDFINED

collegeNmae = "VCC";

// HOISTING IN FUNCTION KEYWORD

getMyName();

function getMyName() {
    console.log("Hey I am Jean");
}

getMyName(); // Hey i am jean

// HOISTING IN LET AND CONST KEYWORD

console.log(country);    // Reference Error
let country = "Canada";


//






