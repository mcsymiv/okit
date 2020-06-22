const User = require('../models/user')

module.exports = {
    async postMethodRegister(req,res,next){
        const newUser = new User({
            email: req.body.email,
            username: req.body.username
        });
        await User.register(newUser, req.body.password)
        res.redirect('/');
    }
}