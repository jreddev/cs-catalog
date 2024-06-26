import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Button,
  Drawer,
  Stack,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material";
import courses from "./data/coursedata";
import "./App.css";

const Header = ({
                  setPreset,
                  handleHideCheckedCourses,
                  categories,
                  handleCategoryChange,
                  checkedCoursesHidden,
                }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState("");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
      <div className="header-container">
        <header className="header" style={{ width: "95%", margin: "0 auto" }}>
          <div className="logo-and-title">
            <img
                className="byu-logo-image"
                alt="BYU"
                src="https://cpaacademy.s3.amazonaws.com/images/companylogos/byu-logo-blue.png"
            />
            <h1>CS Course Catalog</h1>
          </div>

          <div className="menu">

            <Button
                onClick={handleHideCheckedCourses}
                variant="outlined"
                style={{
                  marginRight: "8px",
                  borderRadius: "8px",
                  padding: "2px 5px",
                }}
            >
              {checkedCoursesHidden
                  ? "Show Completed Classes"
                  : "Hide Completed Classes"}
            </Button>
            <div className="preset-drawer">
              <Select
                  className="custom-select"
                  variant='standard'
                  value={selectedPreset}
                  onChange={(e) => {
                    setSelectedPreset(e.target.value);
                    setPreset(e.target.value); // Call the function to set the preset
                  }}
                  displayEmpty
                  disableUnderline
                  SelectDisplayProps={{ style: { backgroundColor: 'transparent' } }} // Customize select display background
                  InputLabelProps={{ shrink: true }}
                  style={{color: '#008bdf', fontSize: '14px'}}
              >
                <MenuItem value="" disabled>SELECT PRESET</MenuItem>
                <MenuItem value="freshman1">Freshman | 1st Semester</MenuItem>
                <MenuItem value="freshman2">Freshman | 2nd Semester</MenuItem>
                <MenuItem value="sophomore1">Sophomore | 1st Semester</MenuItem>
                <MenuItem value="sophomore2">Sophomore | 2nd Semester</MenuItem>
                <MenuItem value="junior1">Junior | 1st Semester</MenuItem>
                <MenuItem value="junior2">Junior | 2nd Semester</MenuItem>
                <MenuItem value="senior1">Senior | 1st Semester</MenuItem>
                <MenuItem value="senior2">Senior | Last Semester</MenuItem>
              </Select>
            </div>
            <button className="menu-icon" onClick={toggleDrawer}>
              &#9776;
            </button>
          </div>
          <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
              className="drawer"
          >
            <div className="drawer-content">
              <h3>Filters</h3>
              {[
                "Core",
                "Software Engineering",
                "Elective",
                "Math",
                "Machine Learning and AI",
                "Design and HCI",
                "Systems",
                "Data",
                "Essential",
                "Theory",
                "Frontend",
                "Graphics",
                "100",
                "200",
                "300",
                "400",
              ].map((category) => (
                  <FormControlLabel
                      control={
                        <Checkbox
                            onChange={() => {
                              handleCategoryChange(category.toLowerCase());
                            }}
                            checked={categories.has(category.toLowerCase())}
                        />
                      }
                      label={category}
                      key={category}
                  />
              ))}
            </div>
          </Drawer>
        </header>
        <Stack
            direction="row"
            spacing={2}
            style={{
              width: "95%",
              margin: "0 auto",
              marginBottom: 10,
              alignItems: "center",
            }}
        >
          {categories.size > 0 && "Current Filters: "}
          {categories.size > 0 &&
              Array.from(categories).map((category) => (
                  <Button
                      key={category}
                      variant="contained"
                      style={{ borderRadius: 20, padding: "2px 10px", margin: "0 5px" }}
                      endIcon={<span style={{ fontSize: 12, marginLeft: 5 }}>✕</span>}
                      onClick={() => handleCategoryChange(category.toLowerCase())}
                  >
                    {category}
                  </Button>
              ))}
          <Button
              variant="outlined"
              onClick={toggleDrawer}
              style={{ borderRadius: 10, padding: "2px 5px", margin: "0 5px" }}
          >
            Add Filters
          </Button>
        </Stack>
      </div>
  );
};

const App = () => {
  const [modalData, setModalData] = useState(null);
  const [courseStatus, setCourseStatus] = useState({});
  const [selectedCategories, setSelectedCategories] = useState(new Set());
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [checkedCoursesHidden, setCheckedCoursesHidden] = useState(false);

  useEffect(() => {
    applyCategoryFilter();
  }, [selectedCategories, checkedCoursesHidden, courseStatus]);

  const applyCategoryFilter = () => {
    setFilteredCourses(
      courses.filter((course) => {
        if (selectedCategories.size === 0) return true;
        return course.category.some((cat) =>
          selectedCategories.has(cat.toLowerCase())
        );
      })
    );
    if (checkedCoursesHidden) {
      setFilteredCourses(
        filteredCourses.filter(
          (course) =>
            courseStatus[course.course_id] === undefined ||
            courseStatus[course.course_id] === false
        )
      );
    }
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = new Set(selectedCategories);
    if (updatedCategories.has(category)) {
      updatedCategories.delete(category);
    } else {
      updatedCategories.add(category);
    }
    setSelectedCategories(updatedCategories);
  };

  const handleHideCheckedCourses = () => {
    setCheckedCoursesHidden(!checkedCoursesHidden);
  };

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

  const setPreset = (preset) => {
    let defaultCourseIds;

    switch (preset) {
      case "freshman1":
        defaultCourseIds = [];
        break;
      case "freshman2":
        defaultCourseIds = [142];
        break;
      case "sophomore1":
        defaultCourseIds = [142, 235, 224];
        break;
      case "sophomore2":
        defaultCourseIds = [142, 235, 224, 236, 260];
        break;
      case "junior1":
        defaultCourseIds = [142, 235, 224, 236, 240, 260, 252];
        break;
      case "junior2":
        defaultCourseIds = [142, 235, 224, 236, 240, 260, 252, 312, 324, 340];
        break;
      case "senior1":
        defaultCourseIds = [142, 235, 224, 236, 240, 260, 252, 312, 324, 340, 404, 452];
        break;
      case "senior2":
        defaultCourseIds = [142, 235, 224, 236, 240, 260, 252, 312, 324, 340, 404, 452, 393, 401, 256, 356];
        break;
      default:
        defaultCourseIds = [];
        return; // No preset selected or unknown preset
    }

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
        setPreset={setPreset}
        handleHideCheckedCourses={handleHideCheckedCourses}
        categories={selectedCategories}
        handleCategoryChange={handleCategoryChange}
        checkedCoursesHidden={checkedCoursesHidden}
      />
      <Table style={{ width: "95%", margin: "0 auto" }}>
        <TableHead className="sticky-header">
          <TableRow>
            <TableCell style={{ fontWeight: "bold" }}>Course ID</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Title</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Credits</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
            <TableCell style={{ fontWeight: "bold" }}>Completed</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {filteredCourses.map((course) => (
            <TableRow
              key={course.course_id}
              onClick={() => handleRowClick(course)}
              className="table-row"
            >
              <TableCell>CS {course.course_id}</TableCell>
              <TableCell>{course.title.replace(/^C S \d+:/, "")}</TableCell>
              <TableCell className="middle">{course.credits}</TableCell>
              <TableCell className="middle">
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
                  style={{ height: "20px", width: "20px" }}
                  checked={courseStatus[course.course_id] || false}
                  disabled={
                    getStatusText(course, courseStatus) === "Unmet Prereqs"
                  }
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
        <Modal
          open={true}
          onClose={closeModal}
          aria-labelledby="modal-title"
          centered
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "70%", // Adjust the width as desired
              height: "fit-content", // Adjust the height as desired
              maxHeight: "80vh", // Add maxHeight to limit height to viewport height
              overflowY: "auto", // Add overflowY to enable vertical scrolling if content exceeds height
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div className="logo-and-title">
                <h2>CS {modalData.course_id} </h2>
                <h3>{modalData.title.replace(/^C S \d+:/, "")}</h3>
              </div>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ×
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
    return "#868686"; // Unmet Prereqs color
  }
  return courseStatus[course.course_id] ? "#c4c4c4" : "#659419"; // Completed or Available color
};

const getStatusText = (course, courseStatus) => {
  if (course.prereq_id && !courseStatus[course.prereq_id]) {
    return "Unmet Prereqs"; // Prerequisites not met
  }
  return courseStatus[course.course_id] ? "Completed" : "Available"; // Completed or Available status
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
