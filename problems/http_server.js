var path = require('path');
var verify = require('adventure-verify');
var request = require('request');
var msee = require('msee');

exports.problem = msee.parse(`
# http server

In iojs, one of the most used apis is the http server api.  It
does not get any easier to create a web server.  

The first thing you do is to require **http** server, and call 
the **createServer** method, then the **listen** method on the
returned server reference.

## Example:

    var http = require('http');
    var server = http.createServer(function(req,res){
      res.end('Hello World')
    });
    server.listen(3000);

So we get the http api by using the require command.  
Then we create a server and pass in a function that 
can handle a http request.  Lastly, we call the server
listen method and pass in a port we want the server to
listen to.


## Challenge:


Create your iojs web server like the one above.


And use $ADVENTURE_COMMAND verify [filename.js]
to confirm the result.
`);

exports.verify = verify(function(args, t) {
  require(path.resolve(args[0]));
  var request = require('request');
  request('http://localhost:3000', function(e,r,b) {
    t.equals(b, 'Hello World');
    t.end();
    setTimeout(function() { process.exit(0); }, 50);
  });
});