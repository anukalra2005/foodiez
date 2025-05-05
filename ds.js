// db.js
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Prabhjot$%471', // 👈 update this
  database: 'food_ordering'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected.');
});

module.exports = db;
