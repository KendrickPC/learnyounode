const myModule = require('./6-mymodule.js');

const directory = process.argv[2];
const extension = process.argv[3];

myModule(directory, extension, (err, targetFiles) => {
  if (err) {
    return console.error(err);
  }
  targetFiles.forEach(file => {
    console.log(file);
  })
})