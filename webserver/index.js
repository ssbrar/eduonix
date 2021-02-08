const http = require('http')
const fs = require('fs')
const path = require('path')


var mimeTypes = {
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
const fileName = path.join(__dirname, req.url)
  // console.log(fileName);
 var stats;
  try {
    stats = fs.lstatSync(fileName)
  } catch (error) {
    res.writeHead(404, {'Content-Type' : 'text/plain'})
    res.write('404 Not Found!\n')
    res.end()
    return;
  }

  if(stats.isFile()){
    var mimeType =  mimeTypes[path.extname(fileName)]
    // console.log(mimeType);
    res.writeHead(200, {'Content-Type' : mimeType})

    const fileStream = fs.createReadStream(fileName)
    fileStream.pipe(res)
  } else if (stats.isDirectory()){
    res.writeHead(302, {
      'Location' : 'index.html'
    })
    res.end('hi')
  } else {
    res.writeHead(500, {'Content-Type' : 'text/plain'})
    res.write('500 Internal Error!\n')
    res.end()
  }

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});