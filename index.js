// test
const http = require('http');
const port = 8080;

const metrics = {
  requests: 0
}

const requestHandler = (request, response) => {
  console.log(request.url);
  metrics.requests += 1;

  if (request.url === '/') {
    response.end(`Hello, you are #${metrics.requests}!`);
  }

  if (request.url === '/metrics') {
    response.end([
        '# HELP http_requests_total The total number of HTTP requests.',
        '# TYPE http_requests_total counter',
        `http_requests_total ${metrics.requests.toFixed(2)}`,
        '',
    ].join('\n'));
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})
