var fs = require('fs');
var buff = fs.readFileSync(process.argv[1]);
var temp = buff.toString();
var counter = temp.split("\n").length;
counter--;
console.log(counter);