import './App.css';
import courses from './data/testdata';
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const App = () => {
    const [isChecked, setIsChecked] = useState({});
    const handleCheckboxChange = (courseId) => {
        setIsChecked((prevChecked) => ({...prevChecked, [courseId]: !prevChecked[courseId] }));
        console.log("setChecked");
    }
  return (
    <div>
      <h1>CS Course Catalog</h1>
      <div className="course-list">
          {courses.map((course) => (
              <CourseList
                  key = {course.course_id}
                  course = {course}
                  isChecked= {isChecked[course.course_id] || false }
                  onCheckboxChange={handleCheckboxChange}
              />
          ))}
      </div>
    </div>
  );
}

const CourseList = ({ course, isChecked, onCheckboxChange }) => {
    const filtered_title = course.title.replace(/^C S \d+:/,"");
    const [isOpen, setIsOpen] = useState(false);
    const [courseTaken, setCourseTaken] = useState(false);
    const hasUnmetPrereqs = course.prereq_id  && !isChecked[course.prereq_id];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const toggleCourseTaken = (event) => {
        setCourseTaken(!courseTaken);
    };
    return (
        <div className={`course-tile ${hasUnmetPrereqs ? 'unmet-prereq' : isChecked ? 'checked' : ''}`}>
            <div className="course-header">
                <h1>CS {course.course_id}</h1>
                <h2>{filtered_title}</h2>
                <p>taken:</p>
                <input
                    type="checkbox"
                    checked={isChecked[course.course_id] || false}
                    onChange={() => onCheckboxChange(course.course_id)}
                />
            </div>
            <p>Credits: {course.credits}</p>
            <button type="button" onClick={toggleDropdown} className="dropdown-toggle">
                <FontAwesomeIcon icon={faAngleDown}/>
            </button>
            {isOpen && (
                <div className="course-details">
                    <p>Description: {course.course_description}</p>
                </div>
            )}
        </div>
    );
};

export default App;
