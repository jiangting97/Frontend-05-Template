const http = require('http');

http.createServer((request, response) => {
  let body = []
  request.on('error', (err) => {
    console.error(err)
  }).on('data', (chunk) => {
      body.push(chunk.toString())
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(
      `<html>
      <head>
        <style>
          
        </style>
      </head>
      <div>
        test11212
      </div>
      </html>
      
      `
    )
  })
}).listen(8888);
