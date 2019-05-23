const db = require('../bootstrap/db');
const Schema = db.Schema;

const UserSchema = new Schema({
    email           : { type: String, required: true, unique: true },
    password        : { type: String, required: true },
    name            : { type: String, required: true },
    avatar          : { type: String, required: false },
    address         : { type: String, required: false }
});


module.exports = db.model('User', UserSchema);