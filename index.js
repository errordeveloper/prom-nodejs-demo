const http = require('http');
const url = require('url');

const port = 8080;

const welcomeToStringlyApp = (frontendHostname) => {
  return `
    Welcome to stringly app!

    Here is some basic documentation to help you get started:

    > curl -s "http://${frontendHostname}/reverse?string=k8s"
    s8k

    Have fun using stringly app :-)
  `
}

const millionDollarStringlyAlgorithm = (payloadString) => {
  return payloadString.split('').reverse().join('');
}

const requestHandler = (request, response) => {
  console.log(request.url);
  const u = url.parse(request.url, true);

  if (u.pathname === '/reverse' && u.query.string !== undefined) {
    response.end(millionDollarStringlyAlgorithm(u.query.string));
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
