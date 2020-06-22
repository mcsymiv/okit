const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const { 
    getRecipes, 
    getNewRecipe, 
    postCreateRecipe, 
    getShowRecipe
} = require('../controllers/recipes')

/* GET index page. */
router.get('/', asyncErrorHandler(getRecipes));
/* GET new page. */
router.get('/new', getNewRecipe);
/* POST create page. */
router.post('/', asyncErrorHandler(postCreateRecipe));
/* GET show page. */
router.get('/:recipe_id', asyncErrorHandler(getShowRecipe));
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