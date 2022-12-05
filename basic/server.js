const http = require("http");
const port = 4000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("<h1>hello node js server</h1>");
});

myServer.listen(port, hostName, () => {
  console.log(`your server run http//${hostName}:${port}`);
});
