const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    numberPages: {
        type: Number,
        required: false
    },
    publisher: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Book = mongoose.model('Books', bookSchema);

module.exports = Book;