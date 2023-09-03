//FileSystem API provided by node helps handling the interaction with files
const fs = require("node:fs/promises");
fs.writeFile("data.txt", "data in the file")
  .then((res) => {
    console.log("File Created");
  })
  .catch((err) => {
    console.log("file creation failed");
  });
