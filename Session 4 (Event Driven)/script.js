
// WAY 1 Capture that button element in the script
// const button = document.getElementById("click");
// console.log(button);

// WAY Capture the button element using that tag
// const button = document.getElementByTagName("button");
// console.log(button);

// Way 3
// const button = document.querySelector("#click");
// console.log(button);

// Way4 Query selector gets the first element which is
const button1 = document.querySelector(".btn");
console.log(button);

// Query selector all gets the elements which matches
const buttos = document.querySelectorAll(".btn");
console.log(buttons, "All");

// Event handler and listener for button1
button1.addEventListener("click", function() {
    console.log("Fired");
})

