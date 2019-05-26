
const controller = {};
const User = require('../models/User.model');
const config = require('config');
const jwt = require('jsonwebtoken');
const {
    invalidData,
    serverError
} = require('../helpers/errors');


controller.login = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password){
        return invalidData(res);
    } else {
        User
            .findOne({email})
            .then(user => {
                if (!user){
                    res.status(404).send({
                        status: false,
                        msg: 'User not found!'
                    });
                } else {
                    user.comparePassword(password, function(err, isMatch){
                        if(!err && isMatch){
                            let claims = {
                                issuer: 'libApplication',
                                audience: 'libApplication',
                                expiresIn: '4h'
                            };
                            jwt.sign({email: user.email, name: user.name, id: user._id}, config.get('secret'), claims, function(err, token){
                                if(err) throw new Error(err);
                                res.json({
                                    status: true,
                                    data: token,
                                    msg: 'Login Successful'
                                });
                            });
                        } else {
                            res.json({
                                status: false,
                                msg: 'Wrong password'
                            });
                        }
                    });
                }
            })
            .catch(err => {
                serverError(res, err);
            });
    }
};


controller.register = (req, res) => {
    const { email, password, name } = req.body;

    if (!email || !password || !name){
        return invalidData(res);
    } else { 

        User
            .findOne({email})
            .then(user => {
                if (!user){
                    const newUser = new User(req.body);
                    newUser
                        .save()
                        .then(user => {
                            res.json({
                                status: true,
                                msg: 'User created successfully',
                                data: user
                            });
                        })
                        .catch(err => {
                            res.json({
                                status: false,
                                msg: 'Unable to create new user',
                                data: err
                            });
                        });
                } else {
                    res.json({
                        status: false,
                        msg: 'User already exist',
                        data: user
                    });
                }
            })
            .catch(err => {
                serverError(res, err);
            });
    }
};


controller.check = (req, res) => {

};


controller.logout = (req, res) => {
    
};


module.exports = controller;