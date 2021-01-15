var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'unist2020!',
  database: 'assignment_3'
});

conn.connect();

// SELECT 문

var sql = 'SELECT * FROM enrol';
conn.query(sql, function(err, rows, fields) {
    if (err) {
        console.log(err);
    } else {
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i].CNO);
        }
    }
});

// INSERT 문

var sql = 'INSERT INTO student (SNO, SNAME, YEAR, DEPT) VALUES(600, "이아현6", 3, "컴퓨터")';
conn.query(sql, function(err, rows, fields) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
});

var sql = 'INSERT INTO student (SNO, SNAME, YEAR, DEPT) VALUES(?, ?, ?, ?)';
var params = [700, '이아현7', 1, '휴먼지능'];
conn.query(sql, params, function(err, rows, fields) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
});

// UPDATE 문

var sql = 'UPDATE student SET SNAME=?, YEAR=?, DEPT=? WHERE SNO=?';
var params = ['이아현8', 2, '휴먼', 700];
conn.query(sql, params, function(err, rows, fields) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
});

// DELETE 문

var sql = 'DELETE FROM student WHERE SNO=?';
var params = [700];
conn.query(sql, params, function(err, rows, fields) {
    if (err) {
        console.log(err);
    } else {
        console.log(rows);
    }
});

conn.end();