import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import coursesData from './api/api.js';

import Dashboard from './Dashboard.js';

const BASE_URL = 'http://localhost:3000';

function App() {
  return (
    <Router>
      <div>

        
        <Routes>

          <Route exact path="/" element={<Dashboard />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;