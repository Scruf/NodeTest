var fs  = require("fs");
var data = require("./data.json");
console.log(data.name);
fs.readFile("./data.json", 'utf-8',function(err,data){
	console.log(data);
	data = JSON.parse(data);
	console.log(data.name);
});
