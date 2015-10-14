var fs = require('co-fs');
var co = require('co');


co(function* (){
	var data = yield fs.readFile('./data.json',"utf-8");
	console.log(data);
});