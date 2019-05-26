
const controller = {};
const Book = require('../models/Book.model');
const {
    invalidData,
    serverError
} = require('../helpers/errors');

controller.list = (_req, res) => {
    Book
        .find({})
        .then(books => {
            res.json({
                status: true,
                data: books
            });
        })
        .catch(err => {
            serverError(res, err);
        });
};


controller.create = (req, res) => {
    const {
        title,
        description,
        author,
        inventory,
        price
    } = req.body;

    if (
        !title || 
        !description || 
        !author || 
        !inventory ||
        !price
    ){
        invalidData(res);
    } else {
        const book = new Book(req.body);
        book
            .save()
            .then(newBook => {
                if (newBook){
                    res.json({
                        status: true,
                        data: newBook,
                        msg: 'Created the book successfully'
                    });
                } else {
                    serverError(res, 'Can\'t create book');
                }
            })
            .catch(err => {
                serverError(res, err);
            });
    }
};


controller.getBook = (req, res) => {
    const { id } = req.params;
    if (!id){
        invalidData(res);
    } else {
        Book
            .findById(id)
            .then(book => {
                if (!book){
                    return res.json({
                        status: false,
                        msg: 'Book not found',
                        data: {}
                    });
                }
                res.json({
                    status: true,
                    msg: 'Book found successfuly',
                    data: book
                });
            })
            .catch(err => {
                serverError(res, err);
            });
    }
};


controller.updateBook = (req, res) => {
    
};


controller.deleteBook = (req, res) => {
    
};


module.exports = controller;