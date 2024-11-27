// DashboardPage.js
import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  // Placeholder data for grades and alerts
  const gradesData = [
    { subject: "Engineering physics", sem: "First Semester", grade: "A" },
    { subject: "Fundamental of computer", sem: "First  Semester", grade: "B" },
    { subject: "Environmental studies",sem: "First Semester", },
    { subject: "Programming in C",  sem: "First Semester", grade: "B" },
    { subject: "Academic Exploratory Projject", sem: "First Semester", },
  ];
  const currentGPA = 8.9;
  const studentID = "2024PUFCEBADX17193";
  const studentEmail = "2024btechaidsaditya17193@poornima.edu.in";
  const totalCourses = 5;
  const alertsData = [
    {
      type: "Missing Grades",
      message: "You have missing grade in Programming in C.",
      color: "danger",
    },
    {
      type: "Missing Grades",
      message: "You have missing grade in Engineering physics.",
      color: "danger",
    },
    {
      type: "Results",
      message: "End of sem results release, check",
      color: "info",
    },
  ];

  return (
    
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="display-1">Dashboard</h1>
 
      </div>

      <div className="container">
        <div className="row">
          {/* GPA Card */}
          <div className="col-sm-4 mb-4">
            <div className="card bg-success text-white">
              <div className="card-body">
                <h5 className="card-title">Current GPA</h5>
                <p className="card-text">{currentGPA.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Student ID Card */}
          <div className="col-sm-4 mb-4">
            <div className="card bg-info text-white">
              <div className="card-body">
                <h5 className="card-title">Student Info</h5>
                <p class="card-text">
                  ID {studentID} Mail : {studentEmail}
                </p>
              </div>
            </div>
          </div>

          {/* Total Courses Card */}
          <div className="col-sm-4 mb-4">
            <div className="card bg-warning text-dark">
              <div className="card-body">
                <h5 className="card-title">Total Courses</h5>
                <p className="card-text">{totalCourses}</p>
              </div>
            </div>
          </div>
          {/* Grades Card */}
          <div className="col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Grades Overview</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Subject</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Semester</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradesData.map((data, index) => (
                      <tr key={index}>
                        <td>{data.subject}</td>
                        <td>{data.grade}</td>
                        <td>{data.sem}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Alerts Card */}
          <div className="col-sm-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Alerts</h5>

                <ul className="list-group">
                  <li className="list-group-item">
                    {alertsData.map((data, index) => (
                      <div
                        key={index}
                        className={`alert alert-${data.color}`}
                        role="alert"
                      >
                        <strong>{data.type}:</strong> {data.message}
                      </div>
                    ))}
                  </li>
                </ul>
                <Link to="/missing-grade-form">
                <a
                  class="btn btn-primary mt-3" 
                  role="button"
                >
                  Report Missing Grades
                </a>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
