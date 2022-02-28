const express = require('express');
const app = express();
const http = require("http");
const fs= require("fs")
const hostname = "localhost";
const port = 5000;
app.use(express.static('view'));
app.listen(5000);
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader("Content-Type", "text/html");
switch (req.url) {
    case"/":{
        content=fs.readFileSync("./view/index.html")
        res.end(content);
        break;
    }
    case"/about":{
        content=fs.readFileSync("./views/about.html")
        res.end(content);
        break;
    }
    case"/animal/cat":{
        content=fs.readFileSync("./views/animal/cat.html")
        res.end(content);
        break;
    }
    case"/animal/dog":{
        content=fs.readFileSync("./views/animal/dog.html")
        res.end(content);
        break;
    }
 default:
    res.end(`<H1>Home page!</H1>)`);
 break;
 }
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
});