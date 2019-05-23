const express = require('express');
const router = express.Router();

const controller = require('../../controllers/books.controller');

router.post('/', controller.create);
router.get('/', controller.list);
router.get('/:id', controller.getBook);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);

module.exports = router;
