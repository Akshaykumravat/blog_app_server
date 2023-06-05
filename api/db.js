import mysql from "mysql";


export const db = mysql.createConnection({
  host: "blogdb.caovnqqilbqf.eu-north-1.rds.amazonaws.com",
  port:"3306",
  user: "admin",
  password: "Ak147963",
  database: "blog"
});



db.connect(function(err) {

  if (err) {
      return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

// const mysql = require('mysql');

// const con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: 'root'
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM tasks", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });


