var path = require('path');
var jsdom = require('jsdom');
var msee = require('msee');
var verify = require('adventure-verify');

exports.problem = msee.parse(`
# ImmutableJS

Immutable JS is a set of new object types that are based
on some of the object times in clojure, and they use a 
very smart system to quickly calculate changes.  Using
immutable.js to manage your application state makes it
easy for the virtual dom to detect changes and group
  those changes together to paint the dom in smart
sequence cycles.  The two object I use from ImmutableJS is

## Immutable.fromJS

The Immutable fromJS method takes in a javascript object and 
returns an Immutable object.

## Cursor

The cursor object creates a pointer that can be used to navigate the 
Immutable structure as well as detect changes and perform getters and
setters.

## Challenge

In this challenge we will build ImmutableJS into our virtual dom example
and rerender the application based on a change in state.





                             `);

exports.verify = verify(function(args, t) {

});


