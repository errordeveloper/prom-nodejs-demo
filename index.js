const http = require('http');
const port = 8080;

var hits = 0;

const requestHandler = (request, response) => {
  console.log(request.url);
  hits += 1;
  response.end(`Hello, you are visitor number ${hits}!`);
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
})
