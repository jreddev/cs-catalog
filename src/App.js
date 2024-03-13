import React, { useState } from 'react';
import {Table, TableHead, TableRow, TableCell, TableBody, Modal, Button, Drawer} from '@mui/material';
import courses from './data/coursedata';
import './App.css';
import logo from './images/byu-logo.svg'

const Header = ({ uncheckAllCheckboxes, setFreshman2, setSophmore1, setSophmore2, setJunior1, setJunior2, setSenior1, setSenior2 }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <header className="header" style={{ width: '95%' , margin: '0 auto' }}>
            <div className="logo-and-title">
                <img className="byu-logo-image" alt="BYU" src="https://cpaacademy.s3.amazonaws.com/images/companylogos/byu-logo-blue.png"/>
                <h1>CS Course Catalog</h1>
            </div>
            <div className="menu">
                <button className="menu-icon" onClick={toggleDrawer}>&#9776;</button>
            </div>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} className='drawer'>
                <div className="drawer-content">
                    <h3>Semester Presets</h3>
                    <Button variant="text" onClick={uncheckAllCheckboxes}>Freshman | 1st Semester</Button>
                    <Button variant="text" onClick={setFreshman2}> Freshman | 2nd Semester</Button>
                    <Button variant="text" onClick={setSophmore1}>Sophomore | 1st Semester</Button>
                    <Button variant="text" onClick={setSophmore2}>Sophomore | 2nd Semester</Button>
                    <Button variant="text" onClick={setJunior1}>Junior | 1st Semester</Button>
                    <Button variant="text" onClick={setJunior2}>Junior | 2nd Semester</Button>
                    <Button variant="text" onClick={setSenior1}>Senior | 1st Semester</Button>
                    <Button variant="text" onClick={setSenior2}>Senior | Last Semester</Button>

                    <h3>Filters</h3>
                </div>
            </Drawer>
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

    const setFreshman2 = () => {
        const defaultCourseIds = [142];
        const defaultCourseStatus = defaultCourseIds.reduce((acc, courseId) => {
            acc[courseId] = true;
            return acc;
        }, {});
        setCourseStatus(defaultCourseStatus);
    };
    const setSophmore1 = () => {
        const defaultCourseIds = [142, 235, 224];
        const defaultCourseStatus = defaultCourseIds.reduce((acc, courseId) => {
            acc[courseId] = true;
            return acc;
        }, {});
        setCourseStatus(defaultCourseStatus);
    };
    const setSophmore2 = () => {
        const defaultCourseIds = [142, 235, 224, 236, 260];
        const defaultCourseStatus = defaultCourseIds.reduce((acc, courseId) => {
            acc[courseId] = true;
            return acc;
        }, {});
        setCourseStatus(defaultCourseStatus);
    };
    const setJunior1 = () => {
        const defaultCourseIds = [142, 235, 224, 236, 240, 260, 252];
        const defaultCourseStatus = defaultCourseIds.reduce((acc, courseId) => {
            acc[courseId] = true;
            return acc;
        }, {});
        setCourseStatus(defaultCourseStatus);
    };
    const setJunior2 = () => {
        const defaultCourseIds = [142, 235, 224, 236, 240, 260, 252, 312, 324, 340];
        const defaultCourseStatus = defaultCourseIds.reduce((acc, courseId) => {
            acc[courseId] = true;
            return acc;
        }, {});
        setCourseStatus(defaultCourseStatus);
    };
    const setSenior1 = () => {
        const defaultCourseIds = [142, 235, 224, 236, 240, 260, 252, 312, 324, 340, 404, 452];
        const defaultCourseStatus = defaultCourseIds.reduce((acc, courseId) => {
            acc[courseId] = true;
            return acc;
        }, {});
        setCourseStatus(defaultCourseStatus);
    };
    const setSenior2 = () => {
        const defaultCourseIds = [142, 235, 224, 236, 240, 260, 252, 312, 324, 340, 404, 452, 393, 401, 256, 356];
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
                setFreshman2={setFreshman2}
                setSophmore1={setSophmore1}
                setSophmore2={setSophmore2}
                setjunior1={setJunior1}
                setJunior2={setJunior2}
                setSenior1={setSenior1}
                setSenior2={setSenior2}

            />
            <Table style={{ width: '95%' , margin: '0 auto' }}>
                <TableHead className="sticky-header">
                    <TableRow>
                        <TableCell style={{ fontWeight: 'bold' }}>Course ID</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Title</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Credits</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
                        <TableCell style={{ fontWeight: 'bold' }}>Completed</TableCell>
                    </TableRow>
                </TableHead>


                <TableBody>
                    {courses.map((course) => (
                        <TableRow key={course.course_id} onClick={() => handleRowClick(course)} className="table-row">
                            <TableCell>CS {course.course_id}</TableCell>
                            <TableCell>{course.title.replace(/^C S \d+:/, '')}</TableCell>
                            <TableCell className="middle">{course.credits}</TableCell>
                            <TableCell className='middle'>
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
                                    disabled={getStatusText(course, courseStatus) === 'Unmet Prereqs'}
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
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '10px'
                        }}>
                            <h2>CS {modalData.course_id} </h2>
                            <h3>{modalData.title.replace(/^C S \d+:/, '')}</h3>
                            <button onClick={closeModal}
                                    style={{background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer'}}>×
                            </button>
                        </div>
                        <p>
                            <strong>Credits:</strong> {modalData.credits}
                        </p>
                        <h4>Description</h4>
                        <p>{modalData.course_description}</p>
                        <h4>Professors & Ratings:</h4>
                        <InstructorCardList instructors={modalData.instructors} />
                    </div>
                </Modal>
            )}
        </div>
    );
};

const getStatusColor = (course, courseStatus) => {
    if (course.prereq_id && !courseStatus[course.prereq_id]) {
        return '#c9c8c8'; // Unmet Prereqs color
    }
    return courseStatus[course.course_id] ? '#bace83' : '#659419'; // Completed or Available color
};

const getStatusText = (course, courseStatus) => {
    if (course.prereq_id && !courseStatus[course.prereq_id]) {
        return 'Unmet Prereqs'; // Prerequisites not met
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
