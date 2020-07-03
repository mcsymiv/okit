const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: String,
    rating: Number,
    date: { 
        type: Date, 
        default: Date.now 
    },
})

module.exports = mongoose.model('Comment', CommentSchema);

/*
    Comment {
    body - String
    author - Object ID ref User
    date - String
    title/recipe - String ref Recipe
    rating - String
    }
*/