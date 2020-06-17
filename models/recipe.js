const mongoose = require('mongosoe');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: String,
    decsription: String,
    images: [ String ],
    portion: String,
    cookTime: String,
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

module.exports = mongoose.model('User', RecipeSchema);

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