const http = require('http');
const url = require('url');

const port = 8080;

let hits = 0;

function welcomeToStringlyApp(frontendHostname) {
  return `
    Welcome to stringly app!

    Here is some basic documentation to help you get started:

    > curl -s "http://${frontendHostname}/reverse?string=banana"
    ananab

    Have fun using stringly app :-)
  `
}

function millionDollarStringlyAlgorithm(payloadString) {
  return payloadString.split('').reverse().join('');
}

function prometheusMetrics() {
  return `http_requests_total ${hits}\n`;
}

const requestHandler = (request, response) => {
  console.log(request.url);
  const u = url.parse(request.url, true);

  if (u.pathname === '/reverse' && u.query.string !== undefined) {
    hits += 1;
    response.end(millionDollarStringlyAlgorithm(u.query.string));
  } else if (request.url === '/metrics') {
    response.end(prometheusMetrics());
  } else {
    response.end(welcomeToStringlyApp(request.headers.host));
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})

