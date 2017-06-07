const restify = require('restify');
const promBundle = require('restify-prom-bundle');

const port = 8080;

const server = restify.createServer();

server.pre(promBundle.preMiddleware(server, {}));

server.get('/', (req, res, done) => {
  res.send('Hello, friend! We are in stelth mode... See you later.');
  done();
});

server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

