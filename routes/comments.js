const express = require('express');
const router = express.Router({mergeParams: true});
const { asyncErrorHandler } = require('../middleware');
const {
    postCreateComment,
    updateComment,
    deleteComment
} = require('../controllers/comments')

/* POST create page. */
router.post('/', asyncErrorHandler(postCreateComment));
/* PUT update page. */
router.put('/:comment_id', asyncErrorHandler(updateComment));
/* DELETE home page. */
router.delete('/:comment_id',asyncErrorHandler(deleteComment));


module.exports = router;