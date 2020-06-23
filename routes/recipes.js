const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const { asyncErrorHandler } = require('../middleware');
const { 
    getRecipes, 
    getNewRecipe, 
    postCreateRecipe, 
    getShowRecipe,
    getEditRecipe,
    updateRecipe,
    deleteRecipe
} = require('../controllers/recipes')

/* GET index page. */
router.get('/', asyncErrorHandler(getRecipes));
/* GET new page. */
router.get('/new', getNewRecipe);
/* POST create page. */
router.post('/', upload.array('images', 10), asyncErrorHandler(postCreateRecipe));
/* GET show page. */
router.get('/:recipe_id', asyncErrorHandler(getShowRecipe));
/* GET edit page. */
router.get('/:recipe_id/edit', asyncErrorHandler(getEditRecipe));
/* PUT update page. */
router.put('/:recipe_id', upload.array('images', 10), asyncErrorHandler(updateRecipe));
/* DELETE home page. */
router.delete('/:recipe_id', asyncErrorHandler(deleteRecipe));


module.exports = router;