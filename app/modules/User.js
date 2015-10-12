var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require("bcrypt-nodejs");
    
    var UserScheam = new Schema({
        name:String,
        username: {type: String, required: true, index: {unique: true}},
        password: {type: String, required: true, select: false}
    });
    
    
UserScheam.pre('save',function(next){
    var user = this;
    if(user.isModified('password')) return next();
    bcrypt.hash(user.password, null, null, function(err, hash){
        if(err) return next(err);
        
        user.password = hash;
        next();
    });
});
module.export = mongoose.model('User', UserScheam);