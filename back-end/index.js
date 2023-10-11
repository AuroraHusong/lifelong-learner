const express = require('express');
const app = express();
const knex = require('knex');
const knexConfig = require('./knexfile'); // Adjust the path as needed

const db = knex(knexConfig.development); // Use the appropriate environment (development, production, etc.)
const coursesData = require('../api/api');

// Define the courses API route
app.get('/api/courses', (req, res) => {
  res.json(coursesData);
});

app.get('/api/users', (req, res) => {
  db
    .select('*')
    .from('users')
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Internal server error' });
    });
});
app.get('/', (req, res) => {
    res.send('Welcome to your Express API!'); // Respond with a welcome message
  });


// Start the Express server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
