
const app = require('express')();

/* 
 *
 * Application Middlewares
 *
 */

require('./middleware')(app);


/* 
 *
 * Bootstrap database and configs
 *
 */

require('./bootstrap')(app);


/* 
 *
 * Routes
 *
 */

require('./routes')(app);


/* 
 *
 * Error handlers
 *
 */

require('./middleware/errorHandler')(app);


module.exports = app;
