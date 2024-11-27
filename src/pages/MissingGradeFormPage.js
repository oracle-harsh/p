import React, { useState } from 'react';

const MissingGradeFormPage = ({ gradeData }) => {
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedSemester, setSelectedSemester] = useState("All");
  const [course, setCourse] = useState("");
  const [instructor, setInstructor] = useState("");
  const [expectedGrade, setExpectedGrade] = useState("");
  const [explanation, setExplanation] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const formGradeData = [
     // Level 100, First Semester
     { course: "Critical Thinking and Practical Reasoning", grade: "A", level: 100, semester: "First Semester" },
     { course: "Introduction to Computer Science", grade: "B", level: 100, semester: "First Semester" },
     { course: "Office Productivity Tools", grade: "A-", level: 100, semester: "First Semester" },
     { course: "Mathematics for IT Professionals", grade: "B+", level: 100, semester: "First Semester" },
     { course: "Introduction to Statistics and Probability I", grade: "A", level: 100, semester: "First Semester" },
     { course: "Algebra and Trigonometry", grade: "B", level: 100, semester: "First Semester", elective: true },
     { course: "Vectors and Geometry", grade: "A-", level: 100, semester: "First Semester", elective: true },
     { course: "Introduction to Economics I", grade: "B+", level: 100, semester: "First Semester", elective: true },
 
     // Level 100, Second Semester
     { course: "Academic Writing I", grade: "A", level: 100, semester: "Second Semester" },
     { course: "Understanding Human Society", grade: "B", level: 100, semester: "Second Semester" },
     { course: "Calculus I", grade: "A-", level: 100, semester: "Second Semester" },
     { course: "Algebra and Geometry", grade: "B+", level: 100, semester: "Second Semester" },
     { course: "Introduction to Statistics and Probability II", grade: "A", level: 100, semester: "Second Semester" },
     { course: "Programming", grade: "B", level: 100, semester: "Second Semester" },
     { course: "Computer Hardware Fund. and Circuits", grade: "A-", level: 100, semester: "Second Semester" },
 
     // Level 200, First Semester
     { course: "Academic Writing II", grade: "A", level: 200, semester: "First Semester" },
     { course: "Programming I", grade: "B", level: 200, semester: "First Semester" },
     { course: "Digital and Logic Systems Design", grade: "A-", level: 200, semester: "First Semester" },
     { course: "Multi Media and Web Design", grade: "B+", level: 200, semester: "First Semester" },
     { course: "Computer Architecture & Organisation", grade: "A", level: 200, semester: "First Semester" },
     { course: "E-Business Architectures", grade: "B", level: 200, semester: "First Semester" },
 
     // Level 200, Second Semester
     { course: "Introduction to African Studies", grade: "A-", level: 200, semester: "Second Semester" },
     { course: "Mobile Application Development", grade: "B+", level: 200, semester: "Second Semester" },
     { course: "Data Structures & Algorithm I", grade: "A", level: 200, semester: "Second Semester" },
     { course: "Systems Administration", grade: "B", level: 200, semester: "Second Semester" },
     { course: "Software Engineering", grade: "A-", level: 200, semester: "Second Semester" },
     { course: "Internship", grade: "B+", level: 200, semester: "Second Semester", elective: true },
     { course: "Numerical and Computational Methods", grade: "A", level: 200, semester: "Second Semester", elective: true },
     { course: "Information Modeling and Specification", grade: "B", level: 200, semester: "Second Semester", elective: true },
    ];

  const filteredCourses = formGradeData
    .filter((data) => (
      (selectedLevel === "All" || data.level === parseInt(selectedLevel)) &&
      (selectedSemester === "All" || data.semester === selectedSemester)
    ))
    .map((data) => data.course);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can implement your own logic for handling the form submission here
    // For demonstration purposes, let's generate a random confirmation code
    const randomConfirmationCode = Math.floor(1000 + Math.random() * 9000);

    // Display the confirmation code and message in a popup
    setConfirmationCode(randomConfirmationCode);
    setShowConfirmation(true);
  };

  return (
    <div className="container mt-4">
      <h2 class="display-1">Report Missing Grade</h2>

      {/* Form to report a missing grade */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="levelFilter" className="form-label">
            Select Level:
          </label>
          <select
            id="levelFilter"
            className="form-select"
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="All">All</option>
            {[100, 200].map((level) => (
              <option key={level} value={level}>
                Level {level}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="semesterFilter" className="form-label">
            Select Semester:
          </label>
          <select
            id="semesterFilter"
            className="form-select"
            onChange={(e) => setSelectedSemester(e.target.value)}
          >
            <option value="All">All</option>
            {["First Semester", "Second Semester"].map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="course" className="form-label">
            Select Course:
          </label>
          <select
            id="course"
            className="form-select"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="" disabled>Select a course</option>
            {filteredCourses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="instructor" className="form-label">
            Instructor Name:
          </label>
          <input
            type="text"
            id="instructor"
            className="form-control"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="expectedGrade" className="form-label">
            Expected Grade:
          </label>
          <input
            type="text"
            id="expectedGrade"
            className="form-control"
            value={expectedGrade}
            onChange={(e) => setExpectedGrade(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="explanation" className="form-label">
            Explanation:
          </label>
          <textarea
            id="explanation"
            className="form-control"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
          />
        </div>

        <button type="submit" style={{ background: 'blue'}} className="btn btn-primary mt-3  btn-lg" role="button">
          Submit
        </button>
      </form>

      {/* Confirmation message popup */}
      {showConfirmation && (
        <div className="mt-4 alert alert-success">
          <p>Your missing grade report has been submitted.</p>
          <p>Confirmation Code: {confirmationCode}</p>
        </div>
      )}
    </div>
  );
};

export default MissingGradeFormPage;
