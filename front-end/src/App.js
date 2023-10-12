import React, { useState, useEffect } from 'react';
import coursesData from './api/api.js'; // Use the correct path to api.js


const BASE_URL = 'http://localhost:3000';

const App = () => {

 
  return (
    <div>
      <h1>Hello</h1>
      {coursesData.length > 0 && (
        <ul>
          {coursesData.map((category) => (
            <li key={category.category}>
              <h2>{category.category}</h2>
              <ul>
                {category.courses.map((course) => (
                  <li key={course.title}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <p>Level: {course.level}</p>
                    <img src={course.imageUrl} width='200px' height= '200px' alt={course.title} />
                    <p>Author: {course.author}</p>
                    <p>Duration: {course.duration}</p>
                    <p>Enrolled: {course.isEnrolled ? 'Yes' : 'No'}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;