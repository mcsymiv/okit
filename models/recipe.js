const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: String,
    description: String,
    steps: [ 
        {
            portion: String,
            cookTime: String,
            stepDescription: String
        }
     ],
    images: [ String ],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [
        { 
            type: Schema.Types.ObjectId, 
            ref: 'Comment' 
        }
    ],
    date: { 
        type: Date, 
        default: Date.now 
    }
})

module.exports = mongoose.model('Recipe', RecipeSchema);

/*
    Recipe {
    title - String
    author - Object ID ref User
    comments - Array of Objects ref Comment
    desc - String
    images - Array of Strings
    date - Object
    portion - String
    cookTime - String
    }
*/