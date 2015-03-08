var msee = require('msee');

exports.problem = msee.parse(`
# virtual-hyperscript

The virtual-dom uses a special json tree format to 
compare the new dom to the old dom and quickly calculate
the differences.  So to effectively convert your new dom
changes over to that format, you need a tool to do so.  
  
There are many options, but I have found virtual-hyperscript
to be one of my favorites.  I have gone through ejs, haml,
jade, handlebars, angular templates, jsx, etc.  Each one
of these requires a slight learning curve and it can be
difficult to bounce back and forth, so usually you have
to pick one as a team.  Hyperscript enables you to pick
javascript as your tool of choice, if you want to create 
a list of items from an array of strings:

    var h = require('virtual-dom/h');
    var items = ['one', 'two','three'];
    var li = function(i) { return h('li', i); }
    var result = h('ul', items.map(li));

So this result will return a virtual-dom tree representation
of the dom that you want to inject.  HyperScript enables you
to leverage the power functional and modular aspects of javascript
to compose your html using reusable pieces.

## Challenge:

* create a simple login form using hyperscript

`);

exports.verify = verify(function(args, t) {

});


