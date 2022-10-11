

function sum (a,b) {
    return a + b;
}

// The above example can be written in arrow function as below

const sum2 = (a, b) => {
    return a + b;
}


// The above example can written in arrow function in single line

const sum3 = (a, b) => a + b;

// **********************************************

// FUNCTIOON EXPRESSION

const sum4 = function(a, b) {
    return a + b;
}

// STRING LITERALS

let myName = "Jean";
let myCollege = "VCC";

console.log("Hi my name is " + myName + " and I study in " + myCollege);

// We can write the above as usig literal strings

console.log(`Hello my name is ${myName} and I study in ${myCollege}`);
