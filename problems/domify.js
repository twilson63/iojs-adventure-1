var path = require('path');
var request = require('request');
var verify = require('adventure-verify');
var msee = require('msee');
var jsdom = require('jsdom').jsdom;

exports.problem = msee.parse(`
# domify

In this lesson, we will talk about using iojs on the client.
Since **javascript** is on the browser the ability to use 
iojs on the browser exists as well.  For our first example, 
we will add a client side js file and load it into our html
file.  We will use a module called domify and an application 
called browserify to help us through this process.

## Example

### Install browserify    

    npm install browserify -g

### Install domify    

    npm install domify

### create app.js and add the following:

   var domify = require('domify');
   document.body.appendChild(domify('<h2>Hello Iojs on the client</h2>'));

### create **domify.html** file

    <!doctype html>
    <html>
      <head>
        <title>Hello Domify</title>
      </head>
      <body>
        <script src="bundle.js"></script>
      </body>
    </html>

### browserify app.js

    browserify app.js -o bundle.js

### now run the static web server and open

    http://localhost:3000/domify.html

## Challenge

Follow the above instructions and use

    $ADVENTURE_COMMAND verify [webserver.js]


`);

exports.verify = verify(function(args, t) {
  require(path.resolve(args[0]));
  jsdom.env({
    url: 'http://localhost:3000/domify.html',
    features: {
      FetchExternalResources: ["script"]
    },
    done: function(err, window) {
      //console.log(window.document.body.outerHTML);
      var result = /<h2>Hello Iojs on the client<\/h2>/
        .test(window.document.body.outerHTML);
      t.ok(result, 'success');
      t.end();
      setTimeout(function() { process.exit(0); }, 50);
    }
  });
});

