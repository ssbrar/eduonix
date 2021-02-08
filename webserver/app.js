// console.log(__dirname);
// console.log(process.cwd());
const path = require('path')
var filename = 'd:/abc/exmple.html'

var temp = path.extname(filename).split('.').reverse()[0]

console.log(temp);