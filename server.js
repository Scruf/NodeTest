var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    config = require("./config.js");
    
    
    
var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('*', function(req,res){
    res.sendFile(__dirname +'/public/views/index.html');
})
app.listen(process.env.PORT,function(err){
    if(err){
        console.log(err);
        
    }else{
        console.log(process.env.PORT.toString()+" "+process.env.IP.toString());
    }
});
    