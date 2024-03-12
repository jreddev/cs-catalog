import React, { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Modal, Button } from '@mui/material';
import courses from './data/coursedata';
import './App.css';


const Header = ({ uncheckAllCheckboxes, checkDefaultCourses }) => {
    return (
        <header className="header">
            <h1>CS Course Catalog</h1>
            <div className="buttons">
                <button onClick={uncheckAllCheckboxes}>Uncheck All</button>
                <button onClick={checkDefaultCourses}>Default User</button>
            </div>
        </header>
    );
};

const App = () => {
    const [modalData, setModalData] = useState(null);
    const [courseStatus, setCourseStatus] = useState({});

    const handleRowClick = (course) => {
        setModalData(course);
    };

    const closeModal = () => {
        setModalData(null);
    };

    const handleCheckboxChange = (courseId) => {
        setCourseStatus((prevStatus) => {
            return { ...prevStatus, [courseId]: !prevStatus[courseId] };
        });
    };

    const uncheckAllCheckboxes = () => {
        setCourseStatus({});
    };

    const checkDefaultCourses = () => {
        const defaultCourseIds = [142, 235, 224, 236, 240, 260];
        const defaultCourseStatus = defaultCourseIds.reduce((acc, courseId) => {
            acc[courseId] = true;
            return acc;
        }, {});
        setCourseStatus(defaultCourseStatus);
    };

    return (
        <div className="page">
            <Header
                uncheckAllCheckboxes={uncheckAllCheckboxes}
                checkDefaultCourses={checkDefaultCourses}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Course ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Credits</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {courses.map((course) => (
                        <TableRow key={course.course_id} onClick={() => handleRowClick(course)}>
                            <TableCell>CS {course.course_id}</TableCell>
                            <TableCell>{course.title.replace(/^C S \d+:/, '')}</TableCell>
                            <TableCell className = "middle">{course.credits}</TableCell>
                            <TableCell className = 'middle'>
                                <div
                                    className="status-icon"
                                    style={{
                                        backgroundColor: getStatusColor(course, courseStatus),
                                    }}
                                >
                                    {getStatusText(course, courseStatus)}
                                </div>
                            </TableCell>
                            <TableCell>
                                <input
                                    type="checkbox"
                                    checked={courseStatus[course.course_id] || false}
                                    disabled={getStatusText(course, courseStatus) === 'Blocked'}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange(course.course_id);
                                    }}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {modalData && (
                <Modal open={true} onClose={closeModal} aria-labelledby="modal-title" centered>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px' }}>
                        <h2 id="modal-title">Course Details</h2>
                        <p>
                            <strong>Credits:</strong> {modalData.credits}
                        </p>
                        <h4>Description</h4>
                        <p>{modalData.course_description}</p>
                        <h4>Professors & Ratings:</h4>
                        <InstructorCardList instructors={modalData.instructors} />
                        <Button variant="contained" onClick={closeModal}>Close</Button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

const getStatusColor = (course, courseStatus) => {
    if (course.prereq_id && !courseStatus[course.prereq_id]) {
        return '#8d0707'; // Blocked color
    }
    return courseStatus[course.course_id] ? '#659419' : '#e39a04'; // Completed or Available color
};

const getStatusText = (course, courseStatus) => {
    if (course.prereq_id && !courseStatus[course.prereq_id]) {
        return 'Blocked'; // Prerequisites not met
    }
    return courseStatus[course.course_id] ? 'Completed' : 'Available'; // Completed or Available status
};

const InstructorCardList = ({ instructors }) => {
    return (
        <div className="instructor-card-list">
            {instructors.map((instructor, index) => (
                <InstructorCard key={index} instructor={instructor} />
            ))}
        </div>
    );
};

const InstructorCard = ({ instructor }) => {
    return (
        <div className="rmp-links">
            <a href={instructor.rmp_link} rel="noreferrer" target="_blank">
                {instructor.first_name} {instructor.last_name}
            </a>
        </div>
    );
};

export default App;
