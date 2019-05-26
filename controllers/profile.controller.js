
const controller = {};
const User = require('../models/User.model');
const {
    invalidData,
    serverError
} = require('../helpers/errors');


controller.viewPage = (req, res) => {
    // TODO
    // Implement profile api
};



controller.updateProfile = (req, res) => {
    const { id } = req.params;
    if (!id){
        invalidData(res);
    } else {
        // TODO:
        // Refactor this shit :/
        User
            .findById(id)
            .then(user => {
                if (user){
                    user.email      = req.body.email;
                    user.password   = req.body.password;
                    user.name       = req.body.name;
                    user.address    = req.body.address;

                    user
                        .save()
                        .then(user => {
                            res.json(user);
                        })
                        .catch(err => {
                            serverError(res, err);
                        })
                }
            })
            .catch(err => {
                serverError(res, err);
            })
    }
};


module.exports = controller;