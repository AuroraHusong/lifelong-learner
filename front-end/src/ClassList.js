import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import coursesData from './api/api.js';
import './style/ClassList.css';

function ClassList() {
    const { selectedCategory } = useParams(); // Access the route parameter
  
    // Filter the courses based on the selected category
    const filteredCourses = coursesData.find((category) => category.category === selectedCategory);
  
    if (!filteredCourses) {
      return <div>No courses found for the selected category.</div>;
    }
  
    return (
      <div className="sectionOfClasses sectionOfClasses-CL">
        <h4 className="categoryHeader">{selectedCategory}</h4>
        <div className="parentOfInnerDiv">
          {filteredCourses.courses.map((course, index) => (
            <a href="#" className="innerDiv innerDiv-CL"
              key={index} 
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/${course.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="textCourseDivEnrolled textCourseDivEnrolled-CL">
                <div className="courseInfoDiv">
                  <div className="courseTitleDiv">{course.title}</div>
                  <div className="subjectDiv">{course.author}</div>
                  <div className="timeDiv">{course.duration}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
  
  export default ClassList;
