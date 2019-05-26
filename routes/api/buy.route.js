const express = require('express');
const router = express.Router();

const controller = require('../../controllers/order.controller');

router.post('/:id', controller.buy);

module.exports = router;
