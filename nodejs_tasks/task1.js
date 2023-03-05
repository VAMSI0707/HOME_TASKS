// Create the node.js server application – that takes the name from http request URL and response back 
// with ‘Hello, {your name}!’.
const http = require('node:http');
const url=require('url');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    //console.log(url.parse(req.url));
    const name=url.parse(req.url).query || "pass your name as a query in the url";
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, ${name}!`);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


