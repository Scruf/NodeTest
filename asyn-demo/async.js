fs = require("fs");
function directory(err,data){
	console.log("data",data);
}

fs.readdir("c:",directory);
console.log("this comes after");