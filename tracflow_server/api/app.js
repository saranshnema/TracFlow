'use strict';
module.exports = function(app) {
    //Initialize models


    //Initialize routes
    let testRoute = require('./routes/test-route');
    testRoute(app);

    let loginRoutes = require('./routes/login-route');
    loginRoutes(app);
    let registerRoutes = require('./routes/register-route');
    registerRoutes(app);

};