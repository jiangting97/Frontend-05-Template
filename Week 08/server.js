const http = require('http');

http.createServer((request, response) => {
  let body = []
  request.on('error', (err) => {
    console.error(err)
  }).on('data', (chunk) => {
    if(chunk) {
      body.push(chunk.toString())
    }
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('Hello World')
  })
}).listen(8888);
