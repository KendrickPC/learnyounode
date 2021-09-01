// 11-http-file-server.js
const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const dir = process.argv[3];

http.createServer(function(req, res) {
  // The filename is simple the local directory and tacks on the requested url
  const filename = dir; 
  // const filename = dir + req.url

  // This line opens the file as a readable stream
  const readStream = fs.createReadStream(filename);

  readStream.on('error', function(err) {
    res.end(err);
  });

  // Wait until we know the readable stream is valid before piping
  readStream.on('open', function() {
    // Pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  })


}).listen(port);