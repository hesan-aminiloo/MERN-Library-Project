
const controller = {};
const Tag = require('../models/Tag.model');
const {
    invalidData,
    serverError
} = require('../helpers/errors');

controller.create = (req, res) => {
    const { title } = req.body;
    if (!title){
        invalidData(res);
    } else {
        const newTag = new Tag(req.body);
        newTag
            .save()
            .then(tag => {
                res.json({
                    status: true,
                    msg: 'Tag created successfuly',
                    data: tag
                });
            })
            .catch(err => {
                serverError(res, err);
            });
    }
};


module.exports = controller;