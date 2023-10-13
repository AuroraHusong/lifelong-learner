import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import coursesData from './api/api.js';
import Navbar from './global/Navbar.js';
import Dashboard from './Dashboard.js';
import Footer from './global/Footer.js';
const BASE_URL = 'http://localhost:3000';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;