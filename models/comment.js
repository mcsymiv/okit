const mongoose = require('mongosoe');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    rating: String,
    date: { 
        type: Date, 
        default: Date.now 
    },
})

module.exports = mongoose.model('User', CommentSchema);

/*
    Comment {
    body - String
    author - Object ID ref User
    date - String
    title/recipe - String ref Recipe
    rating - String
    }
*/