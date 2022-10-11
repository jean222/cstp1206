
// for loops are use to iterate over strings, array (Iterable)

let array = [1,2,3,4];

for (let  i = 0; i < array.length; i++); {
    console.log(i, "Indexes");
    console.log(array[i], "Values at those index");
}

//While loops

let number = 10;
let counter = 0;
while (counter < num) {
    console.log(counter);
    counter++;
}

// DO while loop

let count = 10;
let n = 10;
do {
    console.log(count);
} while (count < n);

// For each loop

let arr = [10, 20, 30, 40, 50];
// arr.forEach(() => {

// })

arr.forEach(function(num){
    console.log(num); // Similar to num[i]
})