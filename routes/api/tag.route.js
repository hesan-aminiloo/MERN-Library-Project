const express = require('express');
const router = express.Router();

const controller = require('../../controllers/tag.controller');

router.post('/', controller.create);

module.exports = router;
