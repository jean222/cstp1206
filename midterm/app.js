// const express = require("express");
// // const http = require ("http");
// //const fs = request("fs");
// const app = express();
// const PORT = 5005;

// let employeeList = [
//     {
//         id: 1,
//         name: "Mike",
//         email: "mike@company.ca",
//         employeeID: 100,
//         department: "IT"
        
//     },
//     {
//         id: 2,
//         name: "Daniel",
//         email: "mike@company.ca",
//         employeeID: 101,
//         department: "HR"
        
//     }
// ]

// console.log(employeeList.department);

// app.get('/employees', (req, res) => {
//     res.send (employeeList);
// });


// app.get ('/employees/:department', (req, res) => {
//     ///////////////////////////////////res.send(employeeList[1].name && employeeList[1].department);
    

// });



// app.listen(PORT, () => {
//     console.log(`Server is running at port ${PORT}`);
// })


const express = require("express");
const app = express();
const PORT = 5050;

let employeeList = [
    {
        id: 1,
        name: "Mike",
        email: "mike@company.ca",
        employeeID: 100,
        department: "IT"
        
    },
    {
        id: 2,
        name: "Daniel",
        email: "mike@company.ca",
        employeeID: 101,
        department: "HR"
        
    }
]

app.use(express.json()); 

app.get("/", (req, res) => {
    res.redirect("/employees")
})

//this prints the employeeList
app.get("/employees", (req,res) => {
    res.send(employeeList);
})




// // this return the message and the employeeList
// app.get ("/employees/li", (req,res) => {
//     return res.status(200).json({
//         message: "Succes",
//         data: employeeList
//     })
// })


// app.get ("/employees/:employeeDept", (req, res) => {
//     const department = req.params.employeeDept;

// const findEmployee = employeeList.find((department) => employeeList.department == "HR" ? true : false);

// if (findEmployee) {
//     return res.status(200).json ({
//         message: "Succes",
//         data: employeeList[0],
//     })
// } 
// else {
//     return res.status(404).json({
//         message: "nope"
//     })
// }
// })





// const findEmployeeDept = employeeList.find((dept) => {
//     if (dept.department == "HR" && dept.department == "IT") {
//         res.send(findEmployeeList[0][1]);

//     }
// })



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT} : localhost:5000`)
})