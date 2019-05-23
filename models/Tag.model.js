const db = require('../bootstrap/db');
const Schema = db.Schema;

const TagSchema = new Schema({
    title       : { type: String, required: true, unique: true }
});

module.exports = db.model('Tag', TagSchema);