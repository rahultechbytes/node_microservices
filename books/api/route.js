const express = require('express');
const router = express.Router();
const bookController = require('./controller/bookController');

router.get('/books', bookController.getBooks);

router.get('/books/:id', bookController.getBooksById);

router.post('/books', bookController.postBooks);

router.delete('/books/:id', bookController.deleteBooksById);

module.exports = router;