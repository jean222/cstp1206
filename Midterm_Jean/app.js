const express = require("express");
const app = express();
const PORT = 5000;

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
    res.redirect("employees")
})

app.get("/employees", (req, res) => {
    res.send(employeeList);
})

// // THIS WORKS
// const findEmployee = employeeList.find(employee => employee.department == "HR");
// // console.log(findEmployee);
// const dept = employeeList.map(({ department } ) => department)
// console.log(dept);

app.get("/employees/:department", (req, res) => {
    const employeeDept = employeeList.map(item =>  {
        const container = {};

        container[item.name] = item.department;
        return container;
    })
    res.send(employeeDept);
})

// not showing anything
app.get("/employees/:employeeID", (req, res) => {
    const employeeId = employeeList.map(item => {
        const idContainer = {};

        idContainer[item.name] = item.id;
        return idContainer;
    })
    res.send(employeeId);
})


// POST
app.post("/employees/posts", (req, res) => {
    const data = req.body;

    if (!data.id || !data.name || !data.email || !data.employeeID || !data.department) {
        return res.status(500).json ({
            message: "It's missing one of the parameters"
        })
    }

    data.id = employeeList.length + 1;
    data.name = employeeList.length + 1;
    data.email = employee.length + 1;
    data.employeeID = employee.length + 1;
    employeeList.push(data);

    return res.status(201).json({
        message: "Success!!",
        data: employeeList
    })
})

// PUT

app.put("/employees/posts/:employeeID", (req, res) => {
    const id = req.params.employeeID;
    const postUpdate = req.body;

    if (!postUpdate.id || !postUpdate.name || !postUpdate.email || !postUpdate.employeeID || !postUpdate.department) {
        return res.status(500).json({
            message: "it's missing one of the parameters"
        })
    }

    employeeList = employeeList.map((post) => {
        if (post.id == id) {
            post = postUpdate;
        }
        return post;
    })

    return res.status(200).json({
        message: "Success!!",
        data: employeeList
    })
})










// =====WAY2=====
// app.get("employee/:department", (req, res) => {
//     const employeeDept = req.params.department;

//     const findEmployee = employeeList.find(employee => employee.department == "HR");

//     if (findEmployee){
//         res.send(employeeList.map(({ department }) => department));
//     }


// })




// =====WAY 1=====
// app.get("employee/:department", (req, res) => {
//     const employeeDept = req.params.department;

//     const findEmployeeDept = employeeList.find(employee => employee.department == "HR" ? true : false);

//     const findEmployeeDept2 = employeeList.find(employee => employee.department == "IT" ? true : false);

//     if (findEmployeeDept) {
//         return res.status(200).json ({
//             message: "succ"
//         })
//     } else {
//         return res.status(404).json({
//             message: "nope"
//         })
//     }
// })



app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
})



