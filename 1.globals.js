// GLOBALS - NO WINDOW
// __dirname - path to current directore
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env whre the program is being executed

// modules
// module.exports = {name:name} || module.exports.name = name
// const names = require('address')
// console.log(names.name)

// built in modules
// OS
// PATH
// FS
// HTTP

// OS module - oprating system module

// const os = require('os')
// os.userInfo() // info about user
// os.uptime() // system uptime in seconds

// PATH module

// const path = require('path')
// path.join("/content","subfolder","text.txt") // /content/subfolder/text.txt
// path.basename("filepath")

//FS module

//sync method
// const { readFileSync, writeFileSync } = require("fs");
// const readFile = readFileSync("./readme.txt", "utf8");
// console.log(readFile);
// writeFileSync(
//   "./writeMe.txt",
//   `this value is written with node : ${readFile}`,
//   { flag: "a" } // a-> append the file and don't over write
// );

//async method
// const { readFile, writeFile } = require("fs");
// readFile("./readme.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });
// writeFile(
//   "./writeMe.txt",
//   `this value is written with node : ${readFile}`,
//   (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(result);
//   }
// );

//HTTP module

// const http = require("http");
// const server = http.createServer((request, response) => {
//   if (request.url === "/") {
//     response.end("this is our home page"); //result in the browser
//   }
//   if (request.url === "/about") {
//     response.end("this is about us page"); //result in the browser
//   }
//   response.end("<h1>Not Found</h1>");
// });
// server.listen(5000);

