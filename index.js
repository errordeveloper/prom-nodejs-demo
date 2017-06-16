const restify = require('restify');
const epimetheus = require('epimetheus');

const port = 8080;

const server = restify.createServer();

epimetheus.instrument(server);

server.get('/', (req, res, done) => {
  res.send('Hello, friend! We are in stealth mode... See you later.');
  done();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
