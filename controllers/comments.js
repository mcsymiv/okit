
const Recipe = require('../models/recipe');
const Comment = require('../models/comment');

module.exports = {

    // CREATE
    async postCreateComment(req, res, next){
        // find recipe by id
        let recipe = await Recipe.findById(req.params.recipe_id)
        // add author
        req.body.comment.author = req.user._id
        // create comment
        let comment = await Comment.create(req.body.comment)
        // assign comment to the recipe
        recipe.comments.push(comment)
        // save recipe
        recipe.save()
        // give a flash message
        req.session.success = `Comment created successfully`
        // redirect to the recipe
        res.redirect(`/recipes/${recipe.id}`)
    },
    // UPDATE
    async updateComment(req,res,next){

    },
    // DELETE
    async deleteComment(req,res,next){

    }
}

            