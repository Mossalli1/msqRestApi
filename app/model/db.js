'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '7sbCmzYtCW',
    password : '6bu8cskgKC',
    database : '7sbCmzYtCW'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;