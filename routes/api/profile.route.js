const express = require('express');
const router = express.Router();

const controller = require('../../controllers/profile.controller');

router.get('/', controller.viewPage);
router.put('/:id', controller.updateProfile);

module.exports = router;
