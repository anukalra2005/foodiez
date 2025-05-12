const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'anu@172005',
  database: 'foodiezdb'
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection error:', err);
    return;
  }
  console.log('✅ Connected to database');
});

// ==========================
// Signup Route
// ==========================
app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'Missing fields' });
  }

  // Check if email already exists
  const checkEmailQuery = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmailQuery, [email], async (err, results) => {
    if (err) {
      console.error('❌ Signup error:', err);
      return res.status(500).json({ success: false, message: 'Signup failed' });
    }

    if (results.length > 0) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(query, [username, email, hashedPassword], (err) => {
      if (err) {
        console.error('❌ Signup error:', err);
        return res.status(500).json({ success: false, message: 'Signup failed' });
      }

      res.status(201).json({ success: true, message: 'Signup successful' });
    });
  });
});

// ==========================
// Login Route
// ==========================
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('❌ Login error:', err);
      return res.status(500).json({ success: false, message: 'Login failed' });
    }

    if (results.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const user = results[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT Token
    const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
    res.status(200).json({ success: true, token });
  });
});

// ==========================
// Add to Cart Route
// ==========================
app.post('/add-to-cart', (req, res) => {
  const { userId, dishName, price } = req.body;

  if (!userId || !dishName || price === undefined) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  // Check if the item already exists in the cart
  const checkQuery = 'SELECT * FROM cart WHERE user_id = ? AND dish_name = ?';
  db.query(checkQuery, [userId, dishName], (err, results) => {
    if (err) {
      console.error('❌ Cart check error:', err);
      return res.status(500).json({ success: false, message: 'Database error' });
    }

    if (results.length > 0) {
      // If the item exists, update the quantity
      const updateQuery = 'UPDATE cart SET quantity = quantity + 1 WHERE user_id = ? AND dish_name = ?';
      db.query(updateQuery, [userId, dishName], (err) => {
        if (err) {
          console.error('❌ Cart update error:', err);
          return res.status(500).json({ success: false, message: 'Database error' });
        }

        res.json({ success: true, message: 'Item quantity updated in cart' });
      });
    } else {
      // If the item doesn't exist, insert it
      const insertQuery = 'INSERT INTO cart (user_id, dish_name, price, quantity) VALUES (?, ?, ?, 1)';
      db.query(insertQuery, [userId, dishName, price], (err) => {
        if (err) {
          console.error('❌ Cart insert error:', err);
          return res.status(500).json({ success: false, message: 'Database error' });
        }

        res.json({ success: true, message: 'Item added to cart' });
      });
    }
  });
});

// ==========================
// Get Cart Items Route
// ==========================
app.post('/get-cart', (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ success: false, message: 'User ID is required' });
  }

  const query = 'SELECT dish_name, price, quantity FROM cart WHERE user_id = ?';
  db.query(query, [userId], (err, results) => {
    if (err) {
      console.error('❌ Fetch cart error:', err);
      return res.status(500).json({ success: false, message: 'Error fetching cart' });
    }

    res.status(200).json({ success: true, cartItems: results });
  });
});

// ==========================
// Server Start
// ==========================
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
