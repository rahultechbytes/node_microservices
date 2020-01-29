const Book = require('../models/bookModel');


module.exports.getBooks = (req, res) => {
    Book.find().then((books) => {
        res.send(books);
    }).catch(err => {
        res.send(err);
    })
}

module.exports.getBooksById = (req, res) => {
    Book.findById(req.params.id).then(data => {
        res.json({
            statusCode: 200,
            data
        })
    }).catch(err => {
        res.send(err);
    })
}

module.exports.deleteBooksById = (req, res) => {
    Book.findOneAndRemove(req.params.id).then(data => {
        res.send({
            statusCode: 200,
            data
        });
    }).catch(err => {
        res.send({
            statusCode: 200,
            err
        });
    })
}

module.exports.postBooks = (req, res) => {
    const { title, author, numberPages, publisher } = req.body;
    let newBook = new Book({
        title: title,
        author: author,
        numberPages: numberPages,
        publisher: publisher
    });
    newBook.save().then(data => {
        res.json({
            statusCode: 200,
            data
        })
    }).catch(err => {
        res.json({
            statusCode: 404,
            err
        });
    })
}