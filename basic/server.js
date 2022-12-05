const http = require("http");
const port = 4000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.writeHead(202, { "Content-Type": "text/plain" });
  res.write("<h1>hello node js server</h1>");
  res.end();
});

myServer.listen(port, hostName, () => {
  console.log(`your server run http//${hostName}:${port}`);
});
