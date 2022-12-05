const fs = require("fs");
// const { getName } = require("./students");

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

fs.readFile("test.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("something went wrong");
  } else {
    console.log(data);
  }
});
