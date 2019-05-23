const db = require('../bootstrap/db');
const Schema = db.Schema;

const BookSchema = new Schema({
    title       : { type: String, required: true },
    description : { type: String, required: true },
    author      : { type: String, required: true },
    inventory   : { type: Number, min: 0, required: true },
    price       : { type: Number, min: 1, required: true },
    tags        : [{ type: Schema.Types.ObjectId, ref: 'Tag' }]
});

module.exports = db.model('Book', BookSchema);