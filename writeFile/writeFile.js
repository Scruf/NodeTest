var fs = require('fs');
var user = '{"name":"Bob"}';
var user1 = {name:"John"};
fs.writeFile("user.json",user);
fs.writeFile("user.json",JSON.stringify(user1));