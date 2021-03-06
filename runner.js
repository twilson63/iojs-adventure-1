#!/usr/bin/env node

require('babel/register');
var adventure = require('adventure');
var shop = adventure('iojs-adventure-1');

var problems = [
  'welcome',
  'javascript_on_the_server',
  'http_server',
  'file_system',
  'userland',
  'domify',
  'module_exports',
  'browserify', 
  'virtual-dom',
  'virtual-hyperscript',
  'immutable_js',
  'request_js',
  'insert-css',
  'bragging-rights'
];
problems.forEach(function(problem){
  shop.add(problem, function() { 
    return require(__dirname + '/problems/' + problem);
  });
});

shop.execute(process.argv.slice(2));
