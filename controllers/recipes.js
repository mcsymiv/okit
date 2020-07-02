
const Recipe = require('../models/recipe');

// mapbox
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const geocodingClient = mbxGeocoding({ accessToken: process.env.MAPBOX_TOKEN });

// image cloud
const cloud = require('cloudinary');
cloud.config({
    cloud_name: 'mcsymiv',
    api_key: '162826219893752',
    api_secret: process.env.CLOUDINARY_SECRET
})

module.exports = {
    // INDEX
    async getRecipes(req,res,next){
        const recipes = await Recipe.find({})
        res.render(`recipes/index`, { recipes })
        
    },
    // NEW
    getNewRecipe(req, res, next){
        res.render(`recipes/new`)
    },
    // CREATE
    async postCreateRecipe(req, res, next){
        req.body.recipe.images = []
        
        for(const file of req.files){
            let image = await cloud.v2.uploader.upload(file.path)
            req.body.recipe.images.push({
                url: image.secure_url,
                public_id: image.public_id
            })
        }

        let response = await geocodingClient.forwardGeocode({
            query: req.body.recipe.location,
            limit: 1
        }).send()
        req.body.recipe.coordinates = response.body.features[0].geometry.coordinates
        
        let recipe = await Recipe.create(req.body.recipe)
        req.session.success = `${recipe.title} recipe created successefully`
        res.redirect(`/recipes/${recipe.id}`)
    },
    // SHOW
    async getShowRecipe(req,res,next){
        let recipe = await Recipe.findById(req.params.recipe_id)
        res.render(`recipes/show`, { recipe })
    },
    // EDIT
    async getEditRecipe(req, res, next){
        let recipe = await Recipe.findById(req.params.recipe_id)
        res.render(`recipes/edit`, { recipe })
    },
    // UPDATE
    async updateRecipe(req,res,next){

        let recipe = await Recipe.findById(req.params.recipe_id)

        // check for image uploads
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

        // check for location updates
        if(recipe.location !== req.body.recipe.location){
            let response = await geocodingClient.forwardGeocode({
                query: req.body.recipe.location,
                limit: 1
            }).send()
            recipe.coordinates = response.body.features[0].geometry.coordinates
            recipe.location = req.body.recipe.location
        }

        recipe.title = req.body.recipe.title
        recipe.description = req.body.recipe.description
        recipe.save()
        res.redirect(`/recipes/${recipe.id}`)
    },
    // DELETE
    async deleteRecipe(req,res,next){

        let recipe = await Recipe.findById(req.params.recipe_id)
        if(recipe.images.length){
            for(const image of recipe.images){
                await cloud.v2.uploader.destroy(image.public_id)
            }
        }
        await recipe.remove()
        res.redirect('/recipes')
    }
}

            