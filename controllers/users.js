const User = require('../models/user')
const passport = require('passport')

module.exports = {
    async postMethodRegister(req,res,next){
        const newUser = new User({
            email: req.body.email,
            username: req.body.username
        });
        await User.register(newUser, req.body.password)
        res.redirect('/');
    },
    userLoginPost(req,res,next){
        passport.authenticate('local', { 
            failureRedirect: '/login',     //res.redirect('/users/' + req.user.username);
            successRedirect: '/', 
            failureFlash: true 
        })(req,res,next)
    },
    userLogout(req,res,next){
        req.logout();
        res.redirect('/')
    }
}