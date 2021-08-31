// Writing a TCP time server
const net = require('net');
const TCPconnectionsPort = process.argv[2]
// console.log(TCPconnectionsPort);

const server = net.createServer( (c) => {
  // 'connection' listener
  // console.log('client connected');
  c.on('end', () => {çç
    console.log('client disconnected');
  });

  const t = new Date();
  const year = t.getFullYear();
  const month = ('0' + (t.getMonth() + 1)).slice(-2);
  const date = ('0' + t.getDate()).slice(-2);
  const hours = ('0' + t.getHours()).slice(-2);
  const minutes = ('0' + t.getMinutes()).slice(-2);
  
  c.write(`${year}-${month}-${date} ${hours}:${minutes}\r\n`);
  // c.write("YO\r\n")
  c.pipe(c);
  c.end();
})

server.on('error', (err) => {
  throw err;
})

server.listen(TCPconnectionsPort)



