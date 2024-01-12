const fs = require("fs");

//readline
// fs.readFile("./doc/blog1.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

// console.log("last line");

// //writeline
// fs.writeFile("./doc/blog1.txt", "hello world", () => {
//   console.log("file was written");
// });

// fs.writeFile("./doc/blog2.txt", "you can code with me", () => {
//   console.log("file was written again");
// });

// //derectories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder has created");
//   });
// } else {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder was deleted");
//   });
// }

//deletedirectory
if (fs.existsSync("./doc/deleteme.txt")) {
  fs.unlink("./doc/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted");
  });
}
