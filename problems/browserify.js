var path = require('path');
var request = require('request');
var verify = require('adventure-verify');
var msee = require('msee');
var jsdom = require('jsdom').jsdom;

exports.problem = msee.parse(`
# Browserify

Browserify is a tool that enables you to leverage almost
the entire node internal module system in the browser. 
Browserify also allows you to run modules from **userland**
in the browser as well.

By wrapping around the module system it creates a mini-module
**require** and **exports** interface in the browser and dynamically
walks the require graph.

Since it is a static code analyzer you have to be explicit in your
declarations, but this it good practice anyway.

## For Example:

    var foo = require('foo');

## Instead of:

    var name = 'foo';
    var foo = require(name);

---

In the previous challenge we used browserify to pull in the 
**domify** module, in this challenge we will inject html from
a partial html file using a browserify transform.

Browserify **transforms** are mix in modules that help browserify
with specific cases.  In this case we want to use the **fs** module
to read an html partial file and we want to add it to the main
html file during load time.  In order to accomplish this, we need
to add a transform called **brfs** to our project:

## Install **brfs** transform

    npm install brfs 

## create partial file called **partial.html**

    <h3>Partial HTML</h3>

## modify the app.js file to contain the following:

    var domify = require('domify');
    var fs = require('fs');
    var partial = fs.readFileSync('partial.html', 'utf-8');

    document.body.appendChild(
      domify(partial)
    );

## browserify your app.js file

    browserify app.js -t brfs -o bundle.js 

now when you run your application, 
you should see the Partial HTML in your browser

## run to view in your browser

    iojs [staticfilesvr.js]

## Challenge:

Build the partial specified above and then verify with:

    $ADVENTURE_COMMAND verify [staticfilesvr.js]
`);

exports.verify = verify(function(args, t) {
  require(path.resolve(args[0]));
  jsdom.env({
    url: 'http://localhost:3000/domify.html',
    features: {
      FetchExternalResources: ["script"]
    },
    done: function(err, window) {
      var result = /<h3>Partial HTML<\/h3>/
        .test(window.document.body.outerHTML);
      t.ok(result, 'success');
      t.end();
      setTimeout(function() { process.exit(0); }, 50);
    }
  });
});