var http = require('http');
var ecstatic = require('ecstatic');

var server = http.createServer(
  function(req, res) {
    console.log(req.url);
    ecstatic(__dirname)(req, res);
  }
);
server.listen(3000);

