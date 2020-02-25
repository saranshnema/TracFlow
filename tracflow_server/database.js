let mysql  =  require('mysql');

const db =mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'tracflow',
});

module.exports = db;
// // connect to the database
// db.connect((err) =>{
//     if(err)
//     {
//         throw err;
//     }
//     console.log("Database connected");
// });
// var database = 'Create database if not exists tracflow';

// db.query(database,function (err,dataa) {
//     if(err){
//         throw err;
//     }
//     if(dataa){
//         console.log(dataa);
//     }
//     console.log("database created");
// })
// var data = 'use tracflow';
// db.query(data,function (err,succc) {
//     if(err){
//         throw err;
//     }
//     else console.log("Database Selected")
// })