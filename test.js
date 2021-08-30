const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const ext = process.argv[3];

// console.log(directory)
// console.log(ext)

fs.readdir(directory, function(err, files) {
  if (err) {
    console.error(err);
  }
  for (let i=0; i < files.length; i++) {
    // console.log(path.extname(files[i]));
    if (path.extname(files[i]) === ext) {
      console.log(files[i]);
    }
  }
})

