// Write a program that uses a single synchronous filesystem operation to  
// read a file and print the number of newlines (\n) it contains to the  
// console (stdout), similar to running cat file | wc -l.

// The full path to the file to read will be provided as the first  
// command-line argument (i.e., process.argv[2]). You do not need to make  
// your own test file.  

// https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm

const fs = require('fs');

const contents = fs.readFileSync(process.argv[2]);
const contentsToString = contents.toString();
const arr = contentsToString.split('\n');
const newLineCount = arr.length-1;
console.log(newLineCount);



