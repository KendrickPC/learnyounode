/*
npm install through2-map
*/

const http = require('http');
const map = require('through2-map');
const port = process.argv[2];


// inStream = request aka req : outStream = response aka res
http.createServer(function(inStream, outStream) {
  if (inStream.method === 'POST') {
    inStream.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    } )).pipe(outStream)
  }
  // console.log(req);
}).listen(port);

