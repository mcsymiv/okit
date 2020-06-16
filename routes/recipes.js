const express = require('express');
const router = express.Router();

/* GET index page. */
router.get('/', (req, res, next) => {
    res.send('/recipes')
});
/* GET new page. */
router.get('/new', (req, res, next) => {
    res.send('/new recipe')
});
/* POST create page. */
router.post('/', (req, res, next) => {
    res.send('/create recipe')
});
/* GET show page. */
router.get('/:recipe_id', (req, res, next) => {
    res.send('/show recipe')
});
/* GET edit page. */
router.get('/:recipe_id/edit', (req, res, next) => {
    res.send('/edit recipe')
});
/* PUT update page. */
router.put('/:recipe_id', (req, res, next) => {
    res.send('/udpade recipe')
});
/* DELETE home page. */
router.delete('/:recipe_id', (req, res, next) => {
    res.send('/delete recipe')
});


module.exports = router;