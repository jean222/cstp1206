const express = require('express');

const app = express();
const PORT = 4000;
const student = [];

//Telling express that the data i am getting is of type JSON
app.use(express.json);

app.get('/', (req, res) => {
    res.send("Welcome!");
})

app.get('/students', (req, res) => {
    return res.status() 
})

app.get('/user', (req, res) => {
    // For get requests we give 200 success response
    // const data = res.status (200);
    // return data.json(student);

    // res.send("Hi user");

    return res.status(200).json(student);
})

// We are tring to post to get students data from the server
app.post('/students', (req, res) => {
    const studentData = req._construct.body;
    student.push(studentData);

})

app.listen(PORT, () => {
    console.log(`Server running ${PORT}`)
})