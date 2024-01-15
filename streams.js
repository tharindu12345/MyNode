const fs = require("fs");

const readStream = fs.createReadStream("./doc/blog3.txt");
const writeStream = fs.createWriteStream("./doc/blog4.txt");

readStream.on("data", (uma) => {
  console.log("----NEW CHUNK----");
  console.log(uma.toString());
  writeStream.write("\nNew Stream\n\n");
  writeStream.write(uma);
});

//pipe
readStream.pipe(writeStream);
