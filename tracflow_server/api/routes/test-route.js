

'use strict';
module.exports = function (app) {
    app.get('/hellotest',function(req,res){
        res.send("HelloWorld");
       console.log("hi");
    }) 
};