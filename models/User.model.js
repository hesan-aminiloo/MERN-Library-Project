const db = require('../bootstrap/db');
const bcrypt = require('bcrypt');
const Schema = db.Schema;

const UserSchema = new Schema({
    email           : { type: String, required: true, unique: true },
    password        : { type: String, required: true },
    name            : { type: String, required: true },
    avatar          : { type: String, required: false },
    address         : { type: String, required: false }
}, {
    collection: 'users',
    timestamps: true
});

UserSchema.pre('save', function(next){
    const user = this;
    if (user.isModified('password') || user.isNew){
        bcrypt.genSalt(10, function(err, salt){
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hashPass){
                if(err) return next(err);
                user.password = hashPass;
                next();
            });
        });
    } else{
        return next();
    }
});

UserSchema.methods.comparePassword = function(pass, cb){
    bcrypt.compare(pass, this.password, function(err, isMatch){
        if(!err && isMatch){
            return cb(err, isMatch);
        }
        return cb(err);
    });
};


module.exports = db.model('User', UserSchema);