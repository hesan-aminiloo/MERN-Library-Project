
const controller = {};


controller.index = (_req, res) => {
    res.json({
        status: true,
        data: {},
        msg: "Home!"
    });
};


module.exports = controller;