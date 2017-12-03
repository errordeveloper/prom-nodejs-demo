const restify = require('restify');
const epimetheus = require('epimetheus');

const port = 8080;

const server = restify.createServer();

epimetheus.instrument(server);

server.use(restify.queryParser());
server.use(restify.requestLogger());

function welcomeToStringlyApp (frontendHostname) {
  return `
    Welcome to Stringly™ app!

    Here is some basic documentation to help you get started:

    > curl "http://${frontendHostname}/reverse?string=banana"
    ananab

    Have fun using Stringly™ app :-)
  `
}

function millionDollarStringlyAlgorithm (payloadString) {
  return payloadString.split('').reverse().join('');
}

server.get('/', (req, res, done) => {
  console.log(req);
  res.header('content-type', 'text/plain')
  res.send(welcomeToStringlyApp(req.headers.host));
  done();
});

server.get('/reverse', (req, res, done) => {
  res.header('content-type', 'text/plain');
  // TODO: use a counter for string length and timer for how long it takes to reverse
  res.send(millionDollarStringlyAlgorithm(req.params['string']));
  done();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
