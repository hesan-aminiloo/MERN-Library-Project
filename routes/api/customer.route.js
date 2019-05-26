const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const controller = require('../../controllers/customer.controller');

router.use(auth);

router.get('/list', controller.list);
router.get('/:id', controller.getCustomer);

module.exports = router;