/**
 * Service for sticky operations.
 */

'use strict';
let db = require('../../database');
var Q = require('q');
    User = mongoose.model('user');
    
    //console.log(User);
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
exports.saveUser = function (userObj, callback) {
    var deferred = Q.defer();
    console.log(userObj);
    let selectsql = `Select email from login WHERE email = '${req.body.username}'`;
    db.query(selectsql, function (err, resu) {
        if (err) {
            throw err;
        }
        if (!resu[0]) {
            let sql = `INSERT INTO   login (username,password) VALUES ('${req.body.username}','${hash}')`
            db.query(sql, function (err, result) {
                if (err) {
                    throw err;
                }
                res.send("User Successfully Created");
            })
        }
        if (resu[0]) {
            res.send("User already exits");
        }
    })
     User.findOne(
       {username :userObj.username},function(err,userObj){
       if(err){
        deferred.reject(err.name +""+err.message);   
       }
       if(userObj){
        deferred.reject('Username "' + userObj.username + '" is already taken');
       }
       else{
        newUser.save(function (err,userObj) {
            
                if(err){
                    console.log("User Not Created");
                }
                else{
                console.log(userObj);
                console.log("User Created");
                }
            
       }
    )
}
   });
}