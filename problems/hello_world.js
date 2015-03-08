var path = require('path');

exports.problem = `
Hello World

This lesson is about [module.exports]

https://iojs.org/api/modules.html#modules_module_exports 

In [iojs] like in the browser comes with a console object.
In order to write any thing out, all you have to do is log it

Example:

      module.exports = 'Hello World'; 
  
So create a file called 1.js with console.log Hello World

and run: iojs-adventure1 1.js

`;

exports.verify = function(args, cb) {
  var res = require(path.resolve(args[0]));
  if (/Hello World/.test(res)) {
    return cb(true);
  }
  console.log('That does not equal `Hello World`'); 
  cb(false);
};

exports.solution = 'module.exports = "Hello World";';
