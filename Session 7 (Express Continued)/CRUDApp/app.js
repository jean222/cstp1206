const express = require("express");
const app = express();
const PORT = 5000;

//CRUD
// C --> Create
// R --> Read
// U --> Update
// D --> Delete

const articles = [
    {
        title: " Latest Technologies",
        author: "Jean",
        timeRequired: "2 minutes",
        description: "This is an article for latest technologies for example = BlockChain, IOT"
    },
    {
        title: "Life in Vancouver",
        author: "Jean",
        timeRequired: "1 minute",
        description: "Vancouver is known for its natural beauty and its fun living here!"
    }
]

app.get("/api/v1/", (req, res) => {

    //Redirecting to new poutes
    res.redirect("/api/v1")
})

app.get("/api/v1/", (req,res) => {
    res.send("ENDPOINTS");
})

app.get("api/v1/posts", (req,res) => {
    return res.status(200).json({
        message: "Succesfully fetched the articles",
        data: articles
    })
})

app.get("/api/v1/posts/:postId", (req, res) => {
    const id = req.params.postId;

    for (let i = 0 ; i < articles.length; i++) {

    }
    
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
})