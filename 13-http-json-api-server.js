const http = require('http');
const port = process.argv[2];
const url = require('url');
const moment = require('moment');


const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'})
  
  if (req.method === 'GET') {
    const pathname = url.parse(req.url, true).pathname;
    const query = url.parse(req.url, true).query;
    // console.log(pathname);
    // console.log(query.iso);
    if (pathname === '/api/parsetime') {
      // console.log("PARSETIME!")
      return res.end(JSON.stringify({
        hour: moment(query.iso).hour(),
        minute: moment(query.iso).minute(),
        second: moment(query.iso).second(),
      }));
    }

    if (pathname === '/api/unixtime') {
      return res.end(JSON.stringify({
        // https://momentjs.com/docs/#/displaying/
        unixtime: Number(moment(query.iso).format('x')),
      }))
    }
    
    res.writeHead(404, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({
      success: false,
      message: `${pathname} is not a valid endpoint. `
    }))
  }
  
  // res.end();
})

server.listen(port)

