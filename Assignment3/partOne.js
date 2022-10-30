let student = [
    {
        name: "Daniel",
        email: "daniel@gmail.com",
        marks: [80, 60, 50, 70, 95]
    },
    {
        name: "Mark",
        email: "mark@gmail.com",
        marks: [99, 40, 84, 72, 60],
    },
    {
        name: "Stacy",
        emal: "stacy@gmail.com",
        marks: [8, 30, 111, 0, 20]
    }
];

function studentWithHighestMarks(arr){
    var marksArr = [];
    var sum = 0;
    Object.values(arr).forEach(val => {
        var markStudent = val.marks;
        var totalMark = markStudent.reduce((a, b) => a + b, 0);
        //console.log(totalMark);

        if (totalMark == 355){
            console.log(student[0].name);
            console.log(student[1].name);
        }

      });
      
}

studentWithHighestMarks(student);



// ==========QUESTION 2==========

// Hi, I just want to let you know that I tried

let arr1 = [1,2,3,5,6,7,8]; // 4
let arr2 = [ 4, 5, 2, 1, 0 ]; // 8
let array = [2, 1, 0, 3, 7, 6,4, 5, 10, 9]; // 8 
let n = arr1.length
// let n = arr2.length
// let n = array.length

function missingNumber(arr, n) {
    let i;
    let numArr = [];

    for (i = 0; i <= n; i++){
        numArr[i] = 0;
    }

    for (i = 0; i < n; i++) {
        numArr[arr[i] - 1] = 1;
    }

    let num = 0;
    for (i = 0; i <= n; i++) {
        if (numArr[i] == 0)
        num = i + 1;
    }

    console.log(num);
}

missingNumber(array, n);


// function missingNumber(array, n) { 
//     let i;
//     let temp = [];



//     // // Mathmax(...array);
//     // const res = array.find( (x,i) => array[i+1]-x > 1 ) + 1;
//     // console.log(res); // 4 
// }

// missingNumber(arr1);


// ==========QUESTION3==========


