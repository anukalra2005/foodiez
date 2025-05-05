// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(bodyParser.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'food_for_foodiez'
// });

// db.connect(err => {
//   if (err) return console.log('Database error:', err);
//   console.log('✅ Connected to database');
// });

// // Signup Route
// app.post('/signup', (req, res) => {
//   const { username, email, password } = req.body;
//   if (!username || !email || !password) {
//     return res.status(400).json({ success: false, message: 'Missing fields' });
//   }

//   const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
//   db.query(query, [username, email, password], (err, result) => {
//     if (err) return res.status(500).json({ success: false, message: 'Signup failed' });
//     res.status(201).json({ success: true, message: 'Signup successful' });
//   });
// });

// // Login Route
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
//   db.query(query, [email, password], (err, results) => {
//     if (err) return res.status(500).json({ success: false, message: 'Login failed' });

//     if (results.length === 0) {
//       return res.status(401).json({ success: false, message: 'Invalid credentials' });
//     }

//     const user = results[0];
//     res.status(200).json({ success: true, userId: user.id });
//   });
// });

// // Add to Cart
// // app.post('/add-to-cart', (req, res) => {
// //   const { userId, dishName, price } = req.body;
// //   if (!userId || !dishName || !price) {
// //     return res.status(400).json({ success: false, message: 'Missing fields' });
// //   }

// //   const sql = 'INSERT INTO cart (user_id, dish_name, price, quantity) VALUES (?, ?, ?, 1)';
// //   db.query(sql, [userId, dishName, price], (err, result) => {
// //     if (err) return res.status(500).json({ success: false, message: 'Database error' });
// //     res.status(200).json({ success: true, message: 'Item added to cart' });
// //   });
// // });





// app.post('/add-to-cart', (req, res) => {
//   // const { userId, dishName, price } = req.body;
// // 
//   // if (!userId || !dishName || !price) {
//   //     console.log("⚠️ Missing data:", req.body);  // Debug
//   //     return res.status(400).json({ success: false, message: "Missing required fields" });
//   // }
// const { userId, dishName, price } = req.body;

// if (!userId || !dishName || price === undefined) {
//   return res.status(400).json({ message: "Missing required fields" });
// }


//   const insertQuery = 'INSERT INTO cart (userId, dishName, price) VALUES (?, ?, ?)';
//   db.query(insertQuery, [userId, dishName, price], (err, result) => {
//       if (err) {
//           console.error("❌ Error inserting into DB:", err);
//           return res.status(500).json({ success: false, message: "Database error" });
//       }

//       res.json({ success: true, message: "Item added to cart" });
//   });
// });


// // Get Cart
// app.post('/get-cart', (req, res) => {
//   const { userId } = req.body;
//   if (!userId) return res.status(400).json({ message: 'User ID is required' });

//   const query = 'SELECT dish_name, price, quantity FROM cart WHERE user_id = ?';
//   db.query(query, [userId], (err, results) => {
//     if (err) return res.status(500).json({ success: false, message: 'Error fetching cart' });

//     res.status(200).json({ success: true, cartItems: results });
//   });
// });

// app.listen(port, () => {
//   console.log(`🚀 Server running on http://localhost:${port}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'anu@172005',
  database: 'foodiezdb'
});

db.connect(err => {
  if (err) return console.log('Database error:', err);
  console.log('✅ Connected to database');
});

// Signup Route
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  db.query(query, [username, email, password], (err, result) => {
    if (err) return res.status(500).json({ success: false, message: 'Signup failed' });
    res.status(201).json({ success: true, message: 'Signup successful' });
  });
});

// Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Login failed' });

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const user = results[0];
    res.status(200).json({ success: true, userId: user.id });
  });
});

// Add to Cart
app.post('/add-to-cart', (req, res) => {
  const { userId, dishName, price } = req.body;

  if (!userId || !dishName || price === undefined) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const insertQuery = 'INSERT INTO cart (user_id, dish_name, price, quantity) VALUES (?, ?, ?, 1)';
  db.query(insertQuery, [userId, dishName, price], (err, result) => {
    if (err) {
      console.error("❌ Error inserting into DB:", err);
      return res.status(500).json({ success: false, message: "Database error" });
    }

    res.json({ success: true, message: "Item added to cart" });
  });
});

// Get Cart Items
app.post('/get-cart', (req, res) => {
  const { userId } = req.body;
  if (!userId) return res.status(400).json({ message: 'User ID is required' });

  const query = 'SELECT dish_name, price, quantity FROM cart WHERE user_id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Error fetching cart' });

    res.status(200).json({ success: true, cartItems: results });
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
