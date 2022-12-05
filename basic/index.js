const fs = require("fs");
const os = require("os");
const path = require("path");
// const { getName } = require("./students");

// =========== os ============
// console.log(os.hostname());
// console.log(os.homedir());
// console.log(os.totalmem());
// console.log(os.freemem());

// =========== path ===========

// console.log(path.extname("index.js"));
// console.log(__dirname);
// console.log(__filename);
// console.log(path.extname("index.c"));
const joinName = path.join(__dirname + "/view");
console.log(joinName);

// =========== write file ==============
// fs.writeFile("delete.txt", "hello world", (err) => {
//   if (err) {
//     console.log("something went problem");
//   } else {
//     console.log("write file successful");
//   }
// });

// ========== append file ===============

// fs.appendFile("demo.txt", " with javascript", (err) => {
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     console.log("successful");
//   }
// });

// ============= rename the file name ===========
// fs.rename("demo.txt", "test.txt", (err) => {
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     console.log("rename successful");
//   }
// });

// ======= delete file ==============

// fs.unlink("delete.txt", (err) => {
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     console.log("file deleted");
//   }
// });

// ============== read file ===========

// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     console.log(data);
//   }
// });
