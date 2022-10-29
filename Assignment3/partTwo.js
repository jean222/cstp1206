// Question 3
// Write a Express server where you will keep records of Employees
// Write get and post api’s for getting all the employees and adding employee to the list
// The object of Employee should look like
// {
// “Name” : “Daniel”,
// “employeeId”: 100,
// “Email” : “daniel@gmail.com”, “Department” :”IT”
// }
// Please submit the code via GITHUB Repo.
// Add the link of Github repo while submitting your code.
// Your repository should have 2 folders
// 1. Programming questions (For first 2)
// 2. Express (For Express Application)

const express = require("express");
const app = express();
const PORT = 4000;

let employeeArr = [];
let emplohyeeObj = {
    name: " ",
    employeeId: " ",
    email: " "
};


app.use(express.json);

app.get("/", (req, res) => {
    res.redirect("/employees")
})

app.get("/employees/posts/", (req,res) => {
    res.send(employeeArr)
})

app.get("/employees/posts/:info", (req, res) => {
    const employeeInfo = req.params.info;

    const findInfo = employeeArr.find((info) => info.employeeInfo == emplohyeeObj ? true : false);

    if (findInfo) {
        return res.status(200).json({
            message: "Succes!",
            data: findInfo
        })
    } else {
        return res.status(404).json({
            message: "error: what u looking for doesnt exist :("
        })
    }
})


app.post("/employees/posts", (req, res) => {
    const data = req.body;

    if ( !data.name || !data.employeeId || !data.email) {
        return res.status(500).json ({
            message: "One of the parameters is missing"
        })
    }

    data.employeeInfo = employeeArr.length + 1;

    employeeArr.push(data);

    return res.status(201).json ({
        message: "Success!!",
        data: employeeArr
    })

})



app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})