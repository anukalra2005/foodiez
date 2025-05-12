// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // 👈 update this
  database: 'food_for_foodiez'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected.');
});

module.exports = db;
