const User = require('../models/user')

module.exports = {
    postMethodRegister(req,res,next){
        console.log('registering user');
        User.register(new User({username: req.body.username}), req.body.password, (err) => {
            if (err) {
                console.log('error while user register!', err);
                return next(err);
            }
            console.log('New user registered!');
            res.redirect('/');
        });
    }
}