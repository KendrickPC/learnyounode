// 7-http-client.js
var http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');
  response.on('error', (err) => {
    console.error(err.toString())
  });
  
  response.on('data', (data) => {
    // return data.toString();
    console.log(data.toString())
  });
  /*
  The only difference between this method and
  http.request() is that it sets the method to
  GET and calls req.end() AUTOMATICALLY. 
  */
  
  // response.on('end', (end) => {
  //   // return end.toString();
  //   console.log(end.toString())
  // });
});