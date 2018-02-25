mongoose = require('mongoose')
var User = mongoose.model('User')
module.exports = {
    login: function(req, res){
        User.findOne({name: req.body.name}, function(err, userFound){
            if(userFound == null){
                User.create({name: req.body.name}, function(err, userCreated){
                    req.session.user = userCreated
                    res.json('success')
                })
            }
            else{
                req.session.user = userFound
                res.json('success')
            }
        })
    },
    logout: function(req,res){
        req.session.destroy()
        res.redirect('/')
    },
    checkSession: function(req, res){
        console.log('in checkSession Controller')
        if(req.session.user){
            return res.json(req.session.user)
        }
        else{
            res.json(null)
        }
    }
}