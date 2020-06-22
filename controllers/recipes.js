const recipe = require("../models/recipe")

const Recipe = require('../models/recipe')

module.exports = {
    async getRecipes(req,res,next){
        const recipes = await Recipe.find({})
        res.render('recipes/index', { recipes })
    },
    getNewRecipe(req, res, next){
        res.render('recipes/new')
    },
    async postCreateRecipe(req, res, next){
        let recipe = await Recipe.create(req.body)
        res.redirect(`/recipes/${recipe.id}`)
    },
    async getShowRecipe(req,res,next){
        let recipe = await Recipe.findById(req.params.recipe_id)
        res.render(`recipes/show`, { recipe })
    }
}