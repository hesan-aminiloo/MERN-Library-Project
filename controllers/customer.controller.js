
const Customer = require('../models/Customer.model');
const {
    serverError,
    invalidData
} = require('../helpers/errors');
const controller = {};

controller.list = (req, res) => {
    Customer
        .find({})
        .populate([
            {
                path: 'user',
                select: ['name', 'email']
            }, 
            {
                path: 'book',
                select: ['title', 'author', 'description', 'price'],
                populate : {
                    path: 'tags',
                    model: 'Tag'
                }
            }
        ])
        .then(customers => {
            res.json({
                status: true,
                msg: 'List customers successful!',
                data: customers
            });
        })
        .catch(err => {
            serverError(res, err);
        });
};


controller.getCustomer = (req, res) => {
    const { id } = req.params;

    if (!id){
        invalidData(res);
    } else {
        Customer
            .findById(id)
            .populate([
                {
                    path: 'user',
                    select: ['name', 'email']
                }, 
                {
                    path: 'book',
                    select: ['title', 'author', 'description', 'price'],
                    populate : {
                        path: 'tags',
                        model: 'Tag'
                    }
                }
            ])
            .then(customer => {
                if (!customer){
                    res.json({
                        status: false,
                        msg: 'Customer not found',
                        data: {}
                    });
                } else {
                    res.json({
                        status: true,
                        msg: 'Customer found successfuly!',
                        data: customer
                    });
                }
            })
            .catch(err => {
                serverError(res, err);
            });
    }
};

module.exports = controller;