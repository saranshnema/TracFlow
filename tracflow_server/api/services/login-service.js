/**
 * Service for sticky operations.
 */

'use strict';

let db = require('./../../database');

/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

/**
 * Returns an array of sticky object matching the search parameters.
 *
 * @param {Object} userObj {Search parameters}
 *
 * @param {function} callback {Sucess callback function}
 */
exports.findOne = function (userObj, callback) {

    let seesql = `SELECT user_id from login WHERE email = '${userObj.username}' and password_hash = '${userObj.password}'`

    db.query(seesql, function (err, foundUser) {
        if (err) {
            console.log(err);
            throwError(err);
        }
        console.log(foundUser);
        callback(foundUser);
    });
};
