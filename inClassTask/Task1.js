const { Console } = require("console");
const http = require ("http");
const PORT = 4000;

const server = http.createServer((request, response)  =>{
    response.setHeader('Content-type', "text/html");

    if (request.url === "/") {
        response.write("<h1>HII</h1>")

        response.end();
    }

    if (request.url === "/dog") {
        response.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAz9BNHggdpbf82p3of9aH4DwFmp2b-COfkNgA3lGE&s">')

        response.end();
    }

    if (request.url === "/cat") {
        response.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VJVkgbXfektXhi-fIt1-J-lTb5Muur0X2VhFObvi&s">')

        response.end();
    }
})

server.listen(PORT, () => {
    console.log("My server is running on port", PORT);
})