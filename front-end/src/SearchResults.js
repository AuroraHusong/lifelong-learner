import React from 'react';
import { useParams } from 'react-router-dom';
import coursesData from './api/api.js';
import './style/ClassList.css';

function SearchResults() {
  const { query } = useParams();

  if (!query) {
    return <div>Please enter a search query.</div>;
  }

  const searchCourses = (query) => {
    query = query.toLowerCase();
    // Filter courses that match the search query across all categories
    const results = coursesData.reduce((acc, category) => {
      const filteredCourses = category.courses.filter((course) =>
        course.title.toLowerCase().includes(query)
      );
      return acc.concat(filteredCourses);
    }, []);
    return results;
  };

  const searchResults = searchCourses(query);
  const limitedSearchResults = searchResults.slice(0, 14);

  return (
    <div className="sectionOfClasses sectionOfClasses-CL">
      <h4 className="categoryHeader">Search Results for: {query}</h4>
      <div className="parentOfInnerDiv">
        {limitedSearchResults.map((course, index) => (
          <a href="#" className="innerDiv innerDiv-CL" key={index}
            
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/${course.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
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

export default SearchResults;
