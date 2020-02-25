'use strict';
module.exports = function (app) {
    const loginController = require('../controllers/login-controller');
    // Sticky Routes for search and create.
    app.route('/login')
        .post(loginController.post)

    // Sticky Routes for get, update and delete.;
};