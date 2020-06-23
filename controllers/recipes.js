const Recipe = require('../models/recipe');
const cloud = require('cloudinary');
cloud.config({
    cloud_name: 'mcsymiv',
    api_key: '162826219893752',
    api_secret: process.env.CLOUDINARY_SECRET
})

module.exports = {
    async getRecipes(req,res,next){
        const recipes = await Recipe.find({})
        res.render(`recipes/index`, { recipes })
    },
    getNewRecipe(req, res, next){
        res.render(`recipes/new`)
    },
    async postCreateRecipe(req, res, next){
        req.body.recipe.images = []
        for(const file of req.files){
            let image = await cloud.v2.uploader.upload(file.path)
            req.body.recipe.images.push({
                url: image.secure_url,
                public_id: image.public_id
            })
        }
        let recipe = await Recipe.create(req.body.recipe)
        res.redirect(`/recipes/${recipe.id}`)
    },
    async getShowRecipe(req,res,next){
        let recipe = await Recipe.findById(req.params.recipe_id)
        res.render(`recipes/show`, { recipe })
    },
    async getEditRecipe(req, res, next){
        let recipe = await Recipe.findById(req.params.recipe_id)
        res.render(`recipes/edit`, { recipe })
    },
    async updateRecipe(req,res,next){

        let recipe = await Recipe.findById(req.params.recipe_id)
        if(req.body.deleteImages && req.body.deleteImages.length){
            let deleteImages = req.body.deleteImages
            for(const public_id of deleteImages){
                await cloud.v2.uploader.destroy(public_id)
                for(const image of recipe.images){
                    if(image.public_id === public_id){
                        let index = recipe.images.indexOf(image)
                        recipe.images.splice(index,1)
                    }
                }
            }
        }
        if(req.files){
            for(const file of req.files){
                let image = await cloud.v2.uploader.upload(file.path)
                recipe.images.push({
                    url: image.secure_url,
                    public_id: image.public_id
                })
            }
        }
        recipe.title = req.body.recipe.title
        recipe.description = req.body.recipe.description
        recipe.save()
        res.redirect(`/recipes/${recipe.id}`)
    },
    async deleteRecipe(req,res,next){
        await Recipe.findByIdAndRemove(req.params.recipe_id)
        res.redirect('/recipes')
    }
}