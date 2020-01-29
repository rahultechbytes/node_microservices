const assert = require('assert');
const Book = require('../api/models/bookModel');
const axios = require('axios');

describe('books service api testing', function () {
    // describe('POST /books', function () {
    //     it('return NEWLY ADDED BOOKS', function (done) {
    //         axios({
    //             method: 'post',
    //             url: 'http://localhost:3000/books',
    //             data: {
    //                 title: 'testing mocha',
    //                 author: 'rahul',
    //                 numberPages: '20',
    //                 publisher: 'node tester'
    //             }
    //         }).then((resp) => {
    //             assert.equal(resp.data.statusCode, 200, 'status code')
    //             done()
    //         }).catch(err => console.log("err", err))
    //     })
    // })
    describe('GET /books/:id', function () {
        it('returns REQUESTED BOOK DETAIL', function (done) {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/books/5e2eadfdb2bb6514299a1397'
            }).then((resp) => {
                assert.equal(resp.data.statusCode, 200, 'status Code');
                done()
            }).catch(err => console.log("err", err))
        })
    })
    describe('DELETE /books/:id', function () {
        it('returns REQUESTED BOOK DETAIL', function (done) {
            axios({
                method: 'DELETE',
                url: 'http://localhost:3000/books/5e3014716435b670545e66c8'
            }).then((resp) => {
                assert.equal(resp.data.statusCode, 200, 'status Code');
                done()
            }).catch(err => console.log("err", err))
        })
    })
    describe('GET /books/:id', function () {
        it('returns REQUESTED BOOK DETAIL', function (done) {
            axios({
                method: 'GET',
                url: 'http://localhost:3000/books/5e2eadfdb2bb6514299a1397'
            }).then((resp) => {
                assert.equal(resp.data.statusCode, 200, 'status Code');
                done()
            }).catch(err => console.log("err", err))
        })
    })
})