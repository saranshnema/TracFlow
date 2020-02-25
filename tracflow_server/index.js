let express = require('express'),
    app = express(),
    port = process.env.PORT || 4000,
    bodyParser = require('body-parser'),
    mysql  =  require('mysql');
    db = require('./database');


//bodyparser for testing api inputs
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

let initApp = require('./api/app');
initApp(app);


// create the connection
// const db =mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'tracflow',
// });

//start the server
app.listen(port,()=>{

    console.log('Server started on port 4000');

});


// connect to the database
db.connect((err) =>{
    if(err)
    {
        throw err;
    }
    console.log("Database connected");
});
var database = 'Create database if not exists tracflow';

db.query(database,function (err,dataa) {
    if(err){
        throw err;
    }
    if(dataa){
        console.log(dataa);
    }
    console.log("database created");
})
var data = 'use tracflow';
db.query(data,function (err,succc) {
    if(err){
        throw err;
    }
    else console.log("Database Selected")
});

var createTBLLoginSql = 'CREATE table if not exists login  (user_id int(20), email varchar(100), password_hash varchar(100))';
db.query(createTBLLoginSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Login Created");
    }
});

var createTBLUserDetailsSql = 'CREATE table if not exists userDetails  (user_id int(20), email varchar(100), first_name varchar(50),last_name varchar(50),nickname varchar(50),phone varchar(20),gender varchar(20),date_of_birth varchar(50),image varchar(255))';
db.query(createTBLUserDetailsSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("User Created");
    }
});


var createTBLRolesSql = 'CREATE table if not exists roles  (role_id int(20), title varchar(150), type varchar(50))';
db.query(createTBLRolesSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Roles Created");
    }
});

var createTBLClientsSql = 'CREATE table if not exists clients (client_id int(20),project_id int(20),company_id int(20),title varchar(150),address varchar(255),created_by varchar(255))';
db.query(createTBLClientsSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Clients Created");
    }
});

var createTBLProjectsSql = 'CREATE table if not exists projects (project_id int(20),company_id int(20),number varchar(50),title varchar(150),address varchar(255),date_start varchar(255),created_by varchar(255))';
db.query(createTBLProjectsSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Projects Created");
    }
});

var createTBLContactsSql = 'CREATE table if not exists contacts (contact_id int(20),client_id int(20),email varchar(20), first_name varchar(50), last_name varchar(50),phone varchar(20),created_by varchar(50))';
db.query(createTBLContactsSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Contacts Created");
    }
});

var createTBLCompaniesUsersSql = 'CREATE table if not exists companies_users (company_id int(20),user_id int(20),role_id int(20),email varchar(20))';
db.query(createTBLCompaniesUsersSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Companies User Created");
    }
});

var createTBLProjectUsersSql = 'CREATE table if not exists projects_users (project_id int(20),user_id int(20),role_id int(20),email varchar(20))';
db.query(createTBLProjectUsersSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Projects User Created");
    }
});

var createTBLRatesSql = 'CREATE table if not exists rates (rate_id int(20),type varchar(50),title varchar(50),amount decimal(19,2),status varchar(20))';
db.query(createTBLRatesSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Rates Created");
    }
});

var createTBLMarkupsSql = 'CREATE table if not exists markups (markup_id int(20),type varchar(50),title varchar(50),amount decimal(19,2),status varchar(20))';
db.query(createTBLMarkupsSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Markups Created");
    }
});

var createTBLLaborSql = 'CREATE table if not exists labor (labor_id int(20),project_id int(20), type varchar(50),title varchar(50),amount decimal(19,2),status varchar(20))';
db.query(createTBLLaborSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Labor Created");
    }
});

var createTBLLaborRateTypeSql = 'CREATE table if not exists labor_rate_type (ID int(20),title varchar(150))';
db.query(createTBLLaborRateTypeSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Labor_Rate_Type Created");
    }
});

var createTBLMaterialsSql = 'CREATE table if not exists materials (material_id int(20),project_id int(20), title varchar(150),unit varchar(150), amount decimal(19,2) , status varchar(20))';
db.query(createTBLMaterialsSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Materils Created");
    }
});

var createTBLEquipmentSql = 'CREATE table if not exists equipment (equipment_id int(20),project_id int(20), title varchar(150),unit varchar(150), amount decimal(19,2) , status varchar(20))';
db.query(createTBLEquipmentSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Equipment Created");
    }
});

var createTBLTicketsSql = 'CREATE table if not exists tickets (ticket_id int(20),company_id int(20) ,project_id int(20), title varchar(150),description TEXT,date_start DATETIME ,date_end DATETIME, created_by int(20))';
db.query(createTBLTicketsSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Tickets Created");
    }
});

var createTBLBreakDowns_LaborSql = 'CREATE table if not exists breakdowns_labor (breakdown_id int(20),ticket_id int(20),type varchar(150), rate_type varchar(150), quantity TINYINT(2), hours TINYINT(2),amount DECIMAL(19,2))';
db.query(createTBLBreakDowns_LaborSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Breakdowns_labor Created");
    }
});

var createTBLBreakDowns_LaborSql = 'CREATE table if not exists breakdowns_labor (breakdown_id int(20),ticket_id int(20),type varchar(150), rate_type varchar(150), quantity TINYINT(2), hours TINYINT(2),amount DECIMAL(19,2))';
db.query(createTBLBreakDowns_LaborSql, function (err,createSuc) {
    if(err){
        throw err;
    } else {
        console.log("Breakdowns_labor Created");
    }
});



