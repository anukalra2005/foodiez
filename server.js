const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// CORS configuration to allow requests from your frontend
const corsOptions = {
  origin: '*', // Replace with the correct URL of your frontend
  methods: ['GET', 'POST'],         // Methods you want to allow
  allowedHeaders: ['Content-Type', 'Authorization'],  // Headers you want to allow
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',              // Your MySQL username
  password: 'anu@172005',    // Your MySQL password
  database: 'foodiezdb'      // Your MySQL database name
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Sign-up Endpoint
app.post('/signup', (req, res) => {
  const { username, email, password } = req.body; 
  const queri = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

  db.query(queri, [username, email, password], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Error registering user', error: err });
    }
    console.log('User signed up:', { username, email });
    res.status(201).json({ message: 'User registered successfully' });
  });
});

// Login Endpoint
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const queri = 'SELECT * FROM users WHERE email = ? AND password = ?';

  db.query(queri, [email, password], (err, results) => {
    if (err) {
      console.error('Error during login query:', err);
      return res.status(500).json({ message: 'Error during login', error: err });
    }
    if (results.length > 0) {
      res.status(200).json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.use(bodyParser.json());


// add to cart backend
// Add to Cart Endpoint
// app.post('/add-to-cart', (req, res) => {
//   const { userId, dishName, price } = req.body; // Ensure `userId` is obtained from a login session
//   const query = 'INSERT INTO cart (user_id, dish_name, price, quantity) VALUES (?, ?, ?, 1) ON DUPLICATE KEY UPDATE quantity = quantity + 1';

//   db.query(query, [userId, dishName, price], (err, result) => {
//     if (err) {
//       console.error('Error adding to cart:', err);
//       return res.status(500).json({ message: 'Error adding to cart', error: err });
//     }
//     res.status(201).json({ message: 'Dish added to cart successfully' });
//   });
// });
// Add to cart Endpoint
// Add to Cart Endpoint
app.post('/add-to-cart', (req, res) => {
  console.log('Add to cart request received');
  //console.log('Received POST request to /add-to-cart');  // Debugging line
  const { userId, dishName, price } = req.body;

  // Check if the user and dish data are valid
  if (!userId || !dishName || !price) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // SQL query to add the dish to the user's cart
  const query = 'INSERT INTO cart (user_id, dish_name, price) VALUES (?, ?, ?)';

  db.query(query, [userId, dishName, price], (err, result) => {
    if (err) {
      console.error('Error adding to cart:', err);
      return res.status(500).json({ message: 'Error adding item to cart', error: err });
    }
    res.status(200).json({ success: true, message: 'Item added to cart' });
  });
});
