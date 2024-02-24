import './App.css';
import courses from './data/coursedata';
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const App = () => {
    const [courseStatus, setCourseStatus] = useState({});

    const handleCheckboxChange = (courseId) => {
        setCourseStatus((prevStatus) => {
            const updatedStatus = { ...prevStatus, [courseId]: !prevStatus[courseId] };
            // Update prerequisites status
            courses.forEach(course => {
                if (course.prereq_id && course.prereq_id === courseId) {
                    const hasUnmetPrereqs = course.prereq_id && !updatedStatus[course.prereq_id];
                    //updatedStatus[course.course_id] = !hasUnmetPrereqs;
                }
            });
            return updatedStatus;
        });
    }

    return (
        <div>
            <h1>CS Course Catalog</h1>
            <div className="course-list">
                {courses.map((course) => (
                    <CourseList
                        key={course.course_id}
                        course={course}
                        isChecked={courseStatus[course.course_id] || false}
                        onCheckboxChange={handleCheckboxChange}
                        courseStatus={courseStatus}
                    />
                ))}
            </div>
        </div>
    );
}

const CourseList = ({ course, isChecked, onCheckboxChange, courseStatus }) => {
    const filtered_title = course.title.replace(/^C S \d+:/, "");
    const [isOpen, setIsOpen] = useState(false);
    const hasUnmetPrereqs = course.prereq_id && !courseStatus[course.prereq_id];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`course-tile ${hasUnmetPrereqs ? 'unmet-prereq' : isChecked ? 'checked' : ''}`}>
            <div className="course-header">
                <h1>CS {course.course_id}</h1>
                <h2>{filtered_title}</h2>
                <p>taken:</p>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onCheckboxChange(course.course_id)}
                />
            </div>
            <p>Credits: {course.credits}</p>
            <button type="button" onClick={toggleDropdown} className="dropdown-toggle">
                <FontAwesomeIcon icon={faAngleDown} />
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
