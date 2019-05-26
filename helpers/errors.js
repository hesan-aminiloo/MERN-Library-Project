exports.invalidData = (res) => {
    return res.status(401).send({
        status: false,
        msg: "Invalid data"
    });
}

exports.serverError = (res, err) => {
    console.log(err);
    return res.status(500).send({
        status: false,
        msg: err
    });
}