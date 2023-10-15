import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import coursesData from './api/api.js';
import ClassList from './ClassList';
import Navbar from './global/Navbar.js';
import Dashboard from './Dashboard.js';
import Footer from './global/Footer.js';
import SearchResults from './SearchResults'; // Import the component for search results

function App() {
  // when a category is chosen in the browse dropdown
  const [selectedCategory, setSelectedCategory] = useState('Programming');
  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <Router>
      <div>
        <Navbar selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        <Routes>
          <Route path="/ClassList/:selectedCategory" element={<ClassList />} />
          <Route path="/searchResults/:query" element={<SearchResults />} /> {/* Add this line */}
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
