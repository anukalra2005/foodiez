const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// CORS configuration to allow requests from your frontend
const corsOptions = {
  origin: 'http://127.0.0.1:3001',  // Replace with the correct URL of your frontend
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
