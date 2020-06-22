const express = require('express');
const router = express.Router();
const { postMethodRegister } = require('../controllers/user');
const { asyncErrorHandler } = require('../middleware');
const User = require('../models/user');
const passport = require('passport')

//REGISTER
/* GET user page */
router.get('/', (req, res, next) => {
  res.send('/responde new user is registered');
});
/* GET register page */
router.get('/register', (req, res, next) => {
  res.send('/register page');
});
/* POST register page */
router.post('/register', asyncErrorHandler(postMethodRegister));

//LOGIN
/* GET login page */
router.get('/login', (req, res, next) => {
  res.send('/login page');
});
/* POST login page */
router.post('/login', 
  passport.authenticate('local', { 
    failureRedirect: '/login', 
    successRedirect: '/', 
    failureFlash: true 
  })
    //res.redirect('/users/' + req.user.username);
);

//LOGOUT
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
});

//PROFILE
/* GET profile page */
router.get('/profile/', (req, res, next) => {
  res.send('/profile page');
});
/* PUT profile page */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('/profile/:user_id page');
});

//FORGOT-PW
/* GET forgot-pw page */
router.get('/forgot-pw', (req, res, next) => {
  res.send('/forgot-pw page');
});
/* PUT forgot-pw page */
router.put('/forgot-pw', (req, res, next) => {
  res.send('/forgot-pw page');
});

//RESET-PW
/* GET reset-pw page */
router.get('/reset-pw/:token', (req, res, next) => {
  res.send('/reset-pw/:token page');
});
/* PUT reset-pw page */
router.put('/reset-pw/:token', (req, res, next) => {
  res.send('/reset-pw/:token page');
});

module.exports = router;
