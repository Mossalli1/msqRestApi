// var express = require('express'),
// app = express(),
// port = process.env.PORT || 3000

// const mysql = require('mysql');
// // connection configurations
// const mc = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'mydb'
// });
 
// // connect to database
// mc.connect();

// app.listen(port);

// // console.log('todo list RESTful API server started successfully on:' + port);


// console.log('API server started on: ' + port);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// var routes = require('./app/routes/approutes'); //importing route
// routes(app); //register the route


const express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3000;


const mysql = require('mysql');

// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: '7sbCmzYtCW',
    password: '6bu8cskgKC',
    database: '7sbCmzYtCW'
});

// connect to database
mc.connect();

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route


