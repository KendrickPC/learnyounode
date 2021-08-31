const fs = require('fs');
const path = require('path');

/*
The module must export a single function that takes three arguments:
the directory name, the filename extension string and your callback function, in that order.
*/
module.exports = (directory, extension, callback) => {
  extension = `.${extension}`;
  fs.readdir(directory, (err, files) => {
    /*
    If you receive an error, e.g. from your call to
    fs.readdir(), the callback must be called with
    the error as the first and only argument.  
    */
    if (err) {
      return callback(err);
    }
    const targetFiles = files.filter(file => {
      return path.extname(file) === extension;
    });

    /*
    All went well, call callback with `null` for the error
    argument:
    callback(null, data);
    */
    callback(null, targetFiles);

   })
}



