var domify = require('domify');
var fs = require('fs');
var partial = fs.readFileSync('partial.html', 'utf-8');

document.body.appendChild(domify(partial));


