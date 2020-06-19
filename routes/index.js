const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title:'okit home/landing page'});
});

module.exports = router;
