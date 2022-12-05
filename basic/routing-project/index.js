const http = require("http");
const fs = require("fs");
const port = 4000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  // handle view file custom function
  const handleHeadFile = (code, fileLocation) => {
    fs.readFile(fileLocation, (err, data) => {
      res.writeHead(code, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };

  // request url
  const url = req.url;

  //   url based body show
  if (url === "/") {
    handleHeadFile(200, "./view/index.html");
  } else if (url === "/about") {
    handleHeadFile(200, "./view/about.html");
  } else if (url === "/help") {
    handleHeadFile(200, "./view/help.html");
  }
});

server.listen(port, hostName, () => {
  console.log("running server");
});
