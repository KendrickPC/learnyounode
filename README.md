# README.md

Create a program that prints a list of files in a given directory,  
filtered by the extension of the files. You will be provided a directory  
name as the first argument to your program (e.g. '/path/to/dir/') and a  
file extension to filter by as the second argument.  


### 5-filtered-ls.js 
https://www.geeksforgeeks.org/node-js-fs-readdir-method/

```javascript
// Node.js program to demonstrate the
// fs.readdir() method

// Import the filesystem module
const fs = require('fs');
const path = require('path');

// Function to get current filenames
// in directory with specific extension
fs.readdir(__dirname, (err, files) => {
if (err)
	console.log(err);
else {
	console.log("\Filenames with the .txt extension:");
	files.forEach(file => {
	if (path.extname(file) == ".txt")
		console.log(file);
	})
}
})

```


