var path = require('path');
var fs = require('fs');

exports.problem = `
JavaScript on the Server

JavaScript is the language that works in the browser,
iojs is an implementation that enables you to write/create
service side programs in javascript.

You execute the scripts on the server using a command
line interface.

    iojs -e 'console.log("Hello World")'

Using the -e iojs execute the code in the single quotes.

The normal way to run an iojs application is to save your 
script in a file with an extension of .js, then run the
script by typeing iojs [filename].

Challenge:

In this challenge, you will pretend $ADVENTURE_COMMAND is the 
iojs command.  And you will create a file called 1.js, in this 
file you will add:

    console.log('Hello World')

Then you will save the file and enter back into the terminal,
and run:

    $ADVENTURE_COMMAND verify 1.js

If you get a success message then you did everything correctly
and can move on to the next challenge, if you did not a success
message, then you have a typo, possibly.

`;

exports.verify = function(args, cb) {
  var res = fs.readFileSync(path.resolve(args[0]), 'utf-8');
  if (res.indexOf("console.log('Hello World')") > -1) {
    return cb(true);
  }
  cb(false);
};
