var path = require('path');
var verify = require('adventure-verify');

exports.problem = `
module exports

In io.js you need a way to sandbox code in smaller units that
prevents overloading global scope with to many functions and 
objects.  The module.exports variable can explicitly let
iojs know what will exported when the file is required from
another javascript file.

The most common export is a function, even though you can export
any javascript type.

    module.exports = function(options, callback) {
      // handle options
      callback(null, true);
    };

Challenge:

Create a file that exports a function:

    function(callback)


when called it will call the callback function passing a 
null error object and a string 'Hello World'.  The common 
callback signature in iojs is (err, value);

    $AWAITING_COMMAND verify [file.js]
`;

exports.verify = function(args, cb) {
  var res = require(path.resolve(args[0]));
  res(function(err, v) {

  });
};

