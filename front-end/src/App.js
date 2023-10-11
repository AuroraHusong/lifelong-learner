import React, { useState, useEffect } from 'react';

import coursesData from './api/api.js';
function App() {



  return (
    <div className="App">
      <h1>Hello</h1>
   
  <ul>
  {coursesData.map((courseCategory) => (
    <li key={courseCategory.category}>
      {courseCategory.courses.map((course) => (
        <p key={course.title}><img src={course.imageUrl} style={{ width: '200px', height:'200px' }} />
        </p>
      ))}
    </li>
  ))}
</ul>
    </div>
  );
}

export default App;

