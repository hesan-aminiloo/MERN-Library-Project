const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');


/* 
 *
 * Auth routes
 * 
 * Includes : 
 *  POST    /login, 
 *  POST    /register, 
 *  GET     /check, 
 *  GET     /logout
 * 
 */
router.use('/auth', require('./auth.route'));



/* 
 *
 * Profile routes
 * 
 * Includes : 
 *  GET     /
 * 
 */
// router.use('/profile', auth, require('./profile.route'));



/* 
 *
 * Books routes
 * 
 * Includes : 
 *  GET     / with ?page=
 *  POST    /
 *  PUT     /:id
 *  GET     /:id
 *  DELETE  /:id
 * 
 */
// router.use('/books', auth, require('./books.route'));



/* 
 *
 * Order routes
 * 
 * Includes : 
 *  POST     /:bookId
 * 
 */
// router.use('/buy', auth, require('./buy.route'));



/* 
 *
 * Order routes
 * 
 * Includes : 
 *  POST     /:bookId
 * 
 */
// router.use('/tag', auth, require('./tag.route'));


/* 
 *
 * Customer routes
 * 
 * Includes : 
 *  GET     /list
 *  GET     /:id
 * 
 */
// router.use('/customer', auth, require('./customer.route'));





module.exports = router;