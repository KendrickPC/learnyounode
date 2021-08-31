// 8-http-collect.js
const http = require('http');
const bl = require('bl');

// URL provided to you as the first command-line argument
const url = process.argv[2];

http.get(url, (response) => {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))
} )

// console.log(url);