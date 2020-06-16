const express = require('express');
const router = express.Router({mergeParams: true});

/* GET index page. */
router.get('/', (req, res, next) => {
    res.send('/comment')
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