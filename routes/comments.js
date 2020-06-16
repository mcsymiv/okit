const express = require('express');
const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
    res.send('/comment')
});
/* GET new page. */
router.get('/new', (req, res, next) => {
    res.send('/new comment')
});
/* POST create page. */
router.post('/', (req, res, next) => {
    res.send('/create comment')
});
/* GET edit page. */
router.get('/:comment_id/edit', (req, res, next) => {
    res.send('/edit comment')
});
/* PUT update page. */
router.put('/:comment_id', (req, res, next) => {
    res.send('/udpade comment')
});
/* DELETE home page. */
router.delete('/:comment_id', (req, res, next) => {
    res.send('/delete comment')
});


module.exports = router;