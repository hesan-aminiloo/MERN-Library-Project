const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
    if ('auth' in req.headers && req.headers.auth){
        jwt.verify(req.headers.auth, config.get('secret'), function(err, user){
            if(err) return next(err);
            req.session = user;
            next();
        });
    } else {
        res.status(401).send({
            status: false,
            msg: 'Unauthrozied'
        });
    }
}