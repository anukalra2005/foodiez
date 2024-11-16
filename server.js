// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // CORS configuration to allow requests from your frontend
// const corsOptions = {
//   origin: '*', // Replace with your frontend URL in production for better security
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // Middleware to parse JSON request body
// app.use(bodyParser.json()); // Parse application/json

// // Database connection configuration
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',              // Your MySQL username
//   password: 'anu@172005',    // Your MySQL password
//   database: 'foodiezdb'      // Your MySQL database name
// });

// db.connect(err => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// // Sign-up Endpoint
// app.post('/signup', (req, res) => {
//   const { username, email, password } = req.body;
//   const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

//   db.query(query, [username, email, password], (err, result) => {
//     if (err) {
//       console.error('Error executing query:', err);
//       return res.status(500).json({ message: 'Error registering user', error: err });
//     }
//     console.log('User signed up:', { username, email });
//     res.status(201).json({ message: 'User registered successfully' });
//   });
// });

// // Login Endpoint
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

//   db.query(query, [email, password], (err, results) => {
//     if (err) {
//       console.error('Error during login query:', err);
//       return res.status(500).json({ message: 'Error during login', error: err });
//     }
//     if (results.length > 0) {
//       console.log('Login successful for user:', email);
//       res.status(200).json({ message: 'Login successful', user: results[0] });
//     } else {
//       res.status(401).json({ message: 'Invalid credentials' });
//     }
//   });
// });

// // Add to Cart Endpoint
// app.post('/add-to-cart', (req, res) => {
//   console.log("add to cart request recieved");
//   const { userId, dishName, price } = req.body;

//   // Input validation
//   if (!userId || !dishName || !price) {
//     return res.status(400).json({ success: false, message: 'Missing required fields' });
//   }

//   // SQL query to insert into cart table or update quantity if dish already exists in the cart
//   const query = `
//     INSERT INTO cart (user_id, dish_name, price, quantity)
//     VALUES (?, ?, ?, 1)
//     ON DUPLICATE KEY UPDATE quantity = quantity + 1
//   `;

//   db.query(query, [userId, dishName, price], (err, result) => {
//     if (err) {
//       console.error('Error adding to cart:', err);
//       return res.status(500).json({ message: 'Error adding to cart', error: err });
//     }

//     console.log('Item added to cart:', { userId, dishName, price });
//     res.status(200).json({ success: true, message: 'Item added to cart' });
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // CORS configuration to allow requests from your frontend
// const corsOptions = {
//   origin: '*', // Replace with the correct URL of your frontend for better security
//   methods: ['GET', 'POST'],         
//   allowedHeaders: ['Content-Type', 'Authorization'],  
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // Middleware to parse JSON data
// app.use(bodyParser.json());

// // Database Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',              // Your MySQL username
//   password: 'anu@172005',    // Your MySQL password
//   database: 'foodiezdb'      // Your MySQL database name
// });

// db.connect(err => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// // CORS configuration to allow requests from your frontend
// const corsOptions = {
//   origin: '*', // Allow all origins (change to specific origin for production)
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// // Apply CORS middleware
// app.use(cors(corsOptions));

// // Middleware to parse JSON data
// app.use(bodyParser.json());

// // Database Connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',              // Your MySQL username
//   password: 'anu@172005',    // Your MySQL password
//   database: 'foodiezdb'      // Your MySQL database name
// });

// db.connect(err => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// CORS configuration
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',               // Replace with your MySQL username
  password: 'anu@172005',  // Replace with your MySQL password
  database: 'foodiezdb'       // Replace with your actual database name
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
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';

  db.query(query, [username, email, password], (err, result) => {
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
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

  db.query(query, [email, password], (err, results) => {
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

// Add to Cart Endpoint
// app.post('/add-to-cart', (req, res) => {
//   const { userId, dishName, price } = req.body;

//   if (!userId || !dishName || !price) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   const query = `
//     INSERT INTO cart (user_id, dish_name, price, quantity)
//     VALUES (?, ?, ?, 1)
//     ON DUPLICATE KEY UPDATE quantity = quantity + 1
//   `;

//   db.query(query, [userId, dishName, price], (err, result) => {
//     if (err) {
//       console.error('Error adding to cart:', err);
//       return res.status(500).json({ message: 'Error adding to cart', error: err });
//     }
//     console.log('Item added to cart:', { userId, dishName, price });
//     res.status(200).json({ success: true, message: 'Item added to cart' });
//   });
// });

// // Start Server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
app.post('/add-to-cart', (req, res) => {
  console.log("add to cart request received");
  const { userId, dishName, price } = req.body;

  if (!userId || !dishName || !price) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const query = `
    INSERT INTO cart (user_id, dish_name, price, quantity)
    VALUES (?, ?, ?, 1)
    ON DUPLICATE KEY UPDATE quantity = quantity + 1
  `;

  db.query(query, [userId, dishName, price], (err, result) => {
    if (err) {
      console.error('Error adding to cart:', err);
      return res.status(500).json({ message: 'Error adding to cart', error: err });
    }
    console.log('Item added to cart:', { userId, dishName, price });
    res.status(200).json({ success: true, message: 'Item added to cart' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
