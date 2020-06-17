var express = require('express');
var router = express.Router();

//REGISTER
/* GET register page */
router.get('/register', function(req, res, next) {
  res.send('/register page');
});
/* POST register page */
router.post('/register', function(req, res, next) {
  res.send('/post register');
});

// LOGIN
/* GET login page */
router.get('/login', function(req, res, next) {
  res.send('/login page');
});
/* POST login page */
router.post('/login', function(req, res, next) {
  res.send('/post login');
});

//PROFILE
/* GET profile page */
router.get('/profile/', function(req, res, next) {
  res.send('/profile page');
});
/* PUT profile page */
router.put('/profile/:user_id', function(req, res, next) {
  res.send('/profile/:user_id page');
});

//FORGOT-PW
/* GET forgot-pw page */
router.get('/forgot-pw', function(req, res, next) {
  res.send('/forgot-pw page');
});
/* PUT forgot-pw page */
router.put('/forgot-pw', function(req, res, next) {
  res.send('/forgot-pw page');
});

//RESET-PW
/* GET reset-pw page */
router.get('/reset-pw/:token', function(req, res, next) {
  res.send('/reset-pw/:token page');
});
/* PUT reset-pw page */
router.put('/reset-pw/:token', function(req, res, next) {
  res.send('/reset-pw/:token page');
});

module.exports = router;
