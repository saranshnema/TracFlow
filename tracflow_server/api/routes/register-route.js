'use strict';
module.exports = function (app) {
    const regController = require('../controllers/register-controller');
    // Sticky Routes for search and create.
    app.route('/registration')
        .post(regController.post)

    // Sticky Routes for get, update and delete.;
};