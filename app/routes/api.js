var User = require('../models/user');
module.exports = function(app, express){
    var api = express.Router();
    api.post('/signup', function(req,res){
        var user = new User({
            name: req.body.name,
            usernamae: req.body.username;
        });
    });
}