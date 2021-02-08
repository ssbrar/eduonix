const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')


const mimeTypes = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".wav": "audio/wav",
  ".mp4": "video/mp4",
  ".woff": "application/font-woff",
  ".ttf": "application/font-ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".otf": "application/font-otf",
  ".wasm": "application/wasm",
};
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // const newUrl = new URL(req.url, `http://${req.headers.host}`);
  const fileName = path.join(process.cwd(), req.url)
  console.log(fileName);
  // `http://${req.headers.host}` is equals to http://localhost:3000
  // newUrl is URL {
//   href: 'http://localhost:3000/foo',        
//   origin: 'http://localhost:3000',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: 'localhost:3000',
//   hostname: 'localhost',
//   port: '3000',
//   pathname: '/foo',
//   search: '',
//   searchParams: URLSearchParams {},
//   hash: ''
// }
  // console.log(req.headers)
  // console.log(req.headers.host);
  // console.log(req.socket.localAddress)
  // console.log(req.socket.localPort)
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // OR
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});