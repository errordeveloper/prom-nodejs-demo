const http = require('http');
const port = 8080;

const metrics = {
  hits: 0
}

const requestHandler = (request, response) => {
  console.log(request.url);
  metrics.hits += 1;

  if (request.url === '/') {
    response.end('Hello, World!');
  }

  if (request.url === '/metrics') {
    response.end(`http_requests_total ${metrics.hits.toFixed(2)}\n`);
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})

