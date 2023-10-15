/** @format */
import React from "react";
import coursesData from './api/api.js';
import "./style/Dashboard.css";

function Dashboard() {
	return (
		<span>
			<div className="container">
				<div className="header">
					<div className="title">Learning That Never Stops!</div>
					<div className="subtitle">
						Empower Your Future, One Lesson at a Time.
					</div>
				</div>
				<div className="button-container">
          
					<div className="button">
						<div className="button-text">Learning Styles Quiz</div>
					</div>
        
				</div>
			</div>
			<div className ="sectionOfClasses">
				<h4>Active Courses:</h4>
<ul>
{coursesData[6].courses.slice(0, 4).map((course) => (
    
      <a href="#" className="innerDiv" style={{ backgroundImage: `url(${course.imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
       }}>
        
        <div className="textCourseDivEnrolled">
          <div className="courseInfoDiv">
            <div className="courseTitleDiv">{course.title}</div>

            </div>
          <div className="timelineDiv">
            <div className="timlineBarDiv">
              <div className="completionTextDiv">30% complete</div>
            </div>
            <div className="weeklyDiv mobileHidden">
              <div className="mondayDiv">M</div>
              <div className="tuesdayDiv">T</div>
              <div className="wednesdayDiv">W</div>
              <div className="thursdayDiv">Th</div>
              <div className="fridayDiv">F</div>
              <div className="saturdayDiv">S</div>
              <div className="sundayDiv">Su</div>
            </div>
          </div>
        </div>
      
      </a>
  ))}
</ul>

			</div>

			<div className ="sectionOfClasses">
				<h4>Recommended Courses:</h4>
        <ul>
  {coursesData[1].courses.slice(0, 4).map((course) => (
        <a href="#" className="innerDiv" 
          style={{
            backgroundImage: `url(${course.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
        <div className="textCourseDivEnrolled">
          <div className="courseInfoDiv">
            <div className="courseTitleDiv">{course.title}</div>
            <div className="subjectDiv">{course.author}</div>
            <div className="timeDiv">{course.duration}</div>
            <div className="unenrolledBottomBtnDiv">
                  {course.description}
                </div>
          </div>
        </div>
      </a>
  ))}
</ul>
</div>
     <div className ="sectionOfClasses">
				<h4>Trending In Your Interests:</h4>
        <ul>
  {coursesData[3].courses.slice(0, 4).map((course) => (
        <a href="#" className="innerDiv" 
          style={{
            backgroundImage: `url(${course.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
        >
        <div className="textCourseDivEnrolled">
          <div className="courseInfoDiv">
            <div className="courseTitleDiv">{course.title}</div>
            <div className="subjectDiv">{course.author}</div>
            <div className="timeDiv">{course.duration}</div>
            <div className="unenrolledBottomBtnDiv">
                  {course.description}
                </div>
          </div>
        </div>
      </a>
  ))}
    
    </ul>
</div>

</span>
	);
}
export default Dashboard;