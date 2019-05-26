
const controller = {};
const Book = require('../models/Book.model');
const Customer = require('../models/Customer.model');

const {
    invalidData,
    serverError
} = require('../helpers/errors');


function updateBook(res, _id, quantity){
    Book
        .updateOne({_id}, {
            $inc : {
                inventory: -(parseInt(quantity))
            }
        })
        .exec()
        .catch(err => {
            serverError(res, err);
        });
}

function saveCustomer(res, book, user, quantity){
    new Customer({
        user,
        book,
        quantity
    })
        .save()
        .then(customer => {
            res.json({
                status: true,
                msg: 'Customer added!',
                data: customer
            });
            updateBook(res, book, quantity);
        })
        .catch(err => {
            serverError(res, err);
        });
}

controller.buy = (req, res) => {
    const { id } = req.params;
    
    if (!id){
        invalidData(res);
    } else {
        const userId = req.session.id;
        const { quantity } = req.body;

        saveCustomer(res, id, userId, quantity || 1);
    }
};


module.exports = controller;