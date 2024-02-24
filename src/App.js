import './App.css';
import courses from './data/coursedata';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

const Header = ({ collapseAllDropdowns, expandAllDropdowns, uncheckAllCheckboxes, checkDefaultCourses }) => {
    return (
        <header className="header">
            <h1>CS Course Catalog</h1>
            <div className="buttons">
                <button onClick={collapseAllDropdowns}>Collapse All</button>
                <button onClick={expandAllDropdowns}>Expand All</button>
                <button onClick={uncheckAllCheckboxes}>Uncheck All</button>
                <button onClick={checkDefaultCourses}>Default User</button>
            </div>
        </header>
    );
};

const App = () => {
    const [courseStatus, setCourseStatus] = useState({});
    const [allDropdownsOpen, setAllDropdownsOpen] = useState(false);
    const [individualDropdownsOpen, setIndividualDropdownsOpen] = useState({});

    useEffect(() => {
        if (allDropdownsOpen) {
            // If all dropdowns are open, set individual dropdowns open state accordingly
            const dropdownsState = {};
            courses.forEach((course) => {
                dropdownsState[course.course_id] = true;
            });
            setIndividualDropdownsOpen(dropdownsState);
        } else {
            // If all dropdowns are collapsed, close all individual dropdowns
            setIndividualDropdownsOpen({});
        }
    }, [allDropdownsOpen]);

    const handleCheckboxChange = (courseId) => {
        setCourseStatus((prevStatus) => {
            return {...prevStatus, [courseId]: !prevStatus[courseId]};
        });
    }
    const collapseAllDropdowns = () => {
        setAllDropdownsOpen(false);
        setIndividualDropdownsOpen({});
    };
    const expandAllDropdowns = () => {
        setAllDropdownsOpen(true);
        setIndividualDropdownsOpen({});
    };
    const uncheckAllCheckboxes = () => {
        setCourseStatus({});
    };

    const checkDefaultCourses = () => {
        const defaultCourseIds = [142,235,224,236,240,260];
        const defaultCourseStatus = defaultCourseIds.reduce((acc,courseId) => {
            acc[courseId] = true;
            return acc;
        },{});
        setCourseStatus(defaultCourseStatus);
    }
    const toggleDropdown = (courseId) => {
        setIndividualDropdownsOpen((prevState) => ({
            ...prevState,
            [courseId]: !prevState[courseId],
        }));
    };

    return (
        <div className="page">
            <Header
                collapseAllDropdowns={collapseAllDropdowns}
                expandAllDropdowns={expandAllDropdowns}
                uncheckAllCheckboxes={uncheckAllCheckboxes}
                checkDefaultCourses={checkDefaultCourses}
            />
            <div className="course-list">
                {courses.map((course) => (
                    <CourseList
                        key={course.course_id}
                        course={course}
                        isChecked={courseStatus[course.course_id] || false}
                        onCheckboxChange={handleCheckboxChange}
                        courseStatus={courseStatus}
                        isOpen={individualDropdownsOpen[course.course_id] || false}
                        toggleDropdown={toggleDropdown}
                    />
                ))}
            </div>
        </div>
    );
}

const CourseList = ({course, isChecked, onCheckboxChange, courseStatus, isOpen, toggleDropdown}) => {
    const filtered_title = course.title.replace(/^C S \d+:/, "");
    const hasUnmetPrereqs = course.prereq_id && !courseStatus[course.prereq_id];

    return (
        <div className={`course-tile ${hasUnmetPrereqs ? 'unmet-prereq' : isChecked ? 'checked' : ''}`}>
            <div className="course-header">
                <h1>CS {course.course_id}</h1>
                <h2>{filtered_title}</h2>
                <p>completed:</p>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onCheckboxChange(course.course_id)}
                />
            </div>
            <p>Credits: {course.credits}</p>
            <button
                type="button"
                onClick={() => toggleDropdown(course.course_id)}
                className="dropdown-toggle"
            >
                <FontAwesomeIcon icon={faAngleDown} />
            </button>
            {isOpen && (
                <div className="course-details">
                    <h4>Description</h4>
                    <p>{course.course_description}</p>
                    <h4>Professors & Ratings:</h4>
                    <div className="professor-details">
                        <InstructorCardList instructors={course.instructors}/>
                    </div>
                </div>
            )}
        </div>
    );
};

const InstructorCardList = ({instructors}) => {
   return (
       <div className="instructor-card-list">
           {instructors.map(instructor => (
               <InstructorCard instructor={instructor}/>
           ))}
       </div>
   );
};

const InstructorCard = ({instructor}) => {
    return (
        <div className="rmp-links">
            <a href={instructor.rmp_link} rel="noreferrer" target="_blank">{instructor.first_name} {instructor.last_name}</a>
        </div>
    );
};

export default App;
