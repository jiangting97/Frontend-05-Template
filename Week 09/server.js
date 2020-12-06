const http = require('http');

http.createServer((request, response) => {
  let body = []
  request.on('error', (err) => {
    console.error(err)
  }).on('data', (chunk) => {
      console.log(chunk, 'chunk')
      body.push(chunk.toString())
  }).on('end', () => {
    // body = Buffer.concat(body).toString();
    console.log("body:", body);
    response.setHeader('Content-type', 'text/html')
    response.setHeader('X-Foo', 'bar');
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end(`<html>
    <head></head>
    <body>
      <div>1</div>
    </body>
    </html>`);
  })
}).listen(8888);
