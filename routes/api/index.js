const express = require('express');
const router = express.Router();


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
router.use('/profile', require('./profile.route'));



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
router.use('/books', require('./books.route'));



/* 
 *
 * Order routes
 * 
 * Includes : 
 *  POST     /:bookId
 * 
 */
router.use('/buy', require('./buy.route'));





module.exports = router;