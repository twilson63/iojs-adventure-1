var path = require('path');
var verify = require('adventure-verify');
var request = require('request');
var msee = require('msee');

exports.problem = msee.parse(`
# File System

Sending text via web server is great but not very useful, 
but the ability to send html files on request is very useful. 
In order to send the files you need an approach to load them
into the web server then push them down to the client.      

The **File System** api or **fs** module give you the methods 
needed to **read** and **write** to the file system. 

* readFile
* writeFile
* readFileSync
* writeFileSync
* createReadStream
* createWriteStream

## Challenge:

Create an html file that contains an **h1** element with the 
value of 'Hello World', like the following:

    <h1>Hello World</h1>

You can call it hw.html.  Then in the web server add the **fs**
module, like:

    var http = require('http');
    var fs = require('fs');

## Next - read the index file and send it to the request as
a response of content type **text/html**.

    var html = fs.readFileSync('./hw.html', 'utf-8');

On the readFileSync method the first argument is the html filename,
the second argument converts the returned result into a string,
instead of a buffer.

## Finally

For the last step we need to send the html text to the request
as a response.

    http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(html);
    });

The writeHead method tells the browser the status code of the
response and the content type.  The end method sends the string
you add as the first argument.

## Challenge

* Create a file hw.html
* add the **h1** element that has Hello World as a value
* require the **fs** module in your web server file
* read the html file into your web server app
* modify the request/response function to send html

## Run

    $ADVENTURE_COMMAND verify [filename.js]


`);

exports.verify = verify(function(args, t) {
  require(path.resolve(args[0]));
  request('http://localhost:3000', function(e,r,b) {
    var result = /<h1>Hello World<\/h1>/.test(b);
    t.ok(result, 'success');
    t.end();
    setTimeout(function() { process.exit(0); }, 50);
  });
});