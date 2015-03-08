var path = require('path');
var verify = require('adventure-verify');
var msee = require('msee');
var request = require('request');

exports.problem = msee.parse(`
# Userland

So there are many more internal modules to go through, but
there are also 100,000+ **userland** modules and these 
modules extend the iojs/nodejs eco systems.  In this lesson,
we are going to talk about using the **userland** module 
system to create a **static** web server.      

We are going to use a **userland** module called **ecstatic**.     

There are several modules that do the exact same thing, I prefer
ecstatic.

## Example

The first thing we want to do is install the module:

    npm install ecstatic

Then require the module in our web application:

    var ecstatic = require('ecstatic');

Then add **ecstatic** as the request function handler:

    http.createServer(ecstatic(__dirname));

## Full Example

    var http = require('http');
    var ecstatic = require('ecstatic');
    var server = http.createServer(ecstatic(__dirname));
    server.listen(3000);

## Challenge

* add ecstatic to your web server to listen to the current directory
* make sure you still have hw.html in that folder.



`);

exports.verify = verify(function(args, t) {
  require(path.resolve(args[0]));
  request('http://localhost:3000/hw.html', function(e,r,b) {
    var result = /<h1>Hello World<\/h1>/.test(b);
    t.ok(result, 'success');
    t.end();
    setTimeout(function() { process.exit(0); }, 50);
  });
});
