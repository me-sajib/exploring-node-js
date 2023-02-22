const http = require("http");
const port = 3000;

const myServer = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>First run</h1>");
    res.end();
})

myServer.listen(port, () => {
    console.log("Running server on 3000 port");
})