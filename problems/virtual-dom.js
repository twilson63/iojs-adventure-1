var path = require('path');
var request = require('request');
var verify = require('adventure-verify');
var msee = require('msee');
var jsdom = require('jsdom').jsdom;

exports.problem = msee.parse(`
# Virtual-Dom

The virtual-dom is a module that enables you to compare
the old presentation to the new presentation create the 
differences and only update the dom based on those differences.

So it gives you a virtual area that you can write changes to all
day long and only apply those changes during an efficient repaint
cycle.  This gives the developer a very easy way to reason
about the presentation of their application as well as the 
browser an efficient and effective amount of changes to the
dom in a structured cycle.

This is very much like game programming.

`);
