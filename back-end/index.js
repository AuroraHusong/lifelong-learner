require('dotenv').config()
const express = require('express');
const cors = require('cors');
const app = express();
const knex = require('knex');
const knexConfig = require('./knexfile');
const bodyParser = require("body-parser");

const db = knex(knexConfig.development);
const coursesData = require('../front-end/src/api/api');

app.use(cors({
  origin: 'http://localhost:3001',
}));
app.use(bodyParser.json());
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
