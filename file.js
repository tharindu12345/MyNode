const fs = require("fs");

//readline
// fs.readFile("./doc/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

//writeline
fs.writeFile("./doc/blog1.txt", "hello world", () => {
  console.log("file was written");
});
