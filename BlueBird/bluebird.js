var fs = require("fs");
var Promise = require("bluebird");


Promise.promisifyAll(fs);
fs.readFile("./data.json","utf-8",function(err,data){
	if(err){
		console.error(err);
	}
	else{
		try{
		data = JSON.parse(data);
		console.log(data.name);
	}
	catch(e){
		console.error("Invalid json file");
		}
	}
});
fs.readFileAsync('./data.json')
	.then(JSON.parse)
	.then(function(val){
		console.log(val);
	})
	.catch(SyntaxError,function(e){
		console.error("invalid json");
	})
	.catch(function(e){
		console.log("cannot read the file");
	});