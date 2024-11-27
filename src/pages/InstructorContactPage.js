import React, { useState } from 'react';

const InstructorContactPage = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [emailContent, setEmailContent] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const studentID = "11140508";

  // Sample instructor data
  const instructors = [
    { id: 1, name: 'Mr. Pratish Rawat', email: 'hod.1year@poornima.edu.in' },
    { id: 2, name: 'Mr. Nivesh Balyan', email: 'niveshbalyan@poornima.edin' }, 
  ];

  const handleSelectInstructor = (instructor) => {
    setSelectedInstructor(instructor);
    setEmailContent(''); // Clear email content when a new instructor is selected
  };

  const handleSendEmail = () => {
    // Simulate sending email (display confirmation)
    setShowConfirmation(true);
  };

  return (
    <div className="container mt-4"> 

      {/* List of instructors */}
      <div className="row">
        <div className="col-md-6">
          <h3 class="display-1">Instructors</h3>
          <p>Select an instructor to view their contact details and send them an email.</p>
          <ul className="list-group">
            {instructors.map((instructor) => (
              <li
                key={instructor.id}
                className={`list-group-item ${selectedInstructor && selectedInstructor.id === instructor.id ? 'active' : ''}`}
                onClick={() => handleSelectInstructor(instructor)}
              >
                {instructor.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Instructor details and email form */}
        <div className="col-md-6">
          {selectedInstructor && (
            <div className="mb-3">
              <h2 class="display-1">Contact Details</h2>
              <p>Name: {selectedInstructor.name}</p>
              <p>Email: {selectedInstructor.email}</p>

              <h3>Send Email</h3>

              <div className="mb-3">
                <label htmlFor="studentID" className="form-label">Student ID</label>
                <input type="text" className="form-control" id="studentID" value={studentID} readOnly />
              </div>

              <div className="mb-3">
                <label htmlFor="emailContent" className="form-label">Email Content</label>
                <textarea
                  className="form-control"
                  id="emailContent"
                  rows="3"
                  onChange={(e) => setEmailContent(e.target.value)}
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <button
                className="btn btn-primary"
                onClick={handleSendEmail}
                disabled={!emailContent}
              >
                Send Email
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Confirmation message popup */}
      {showConfirmation && (
        <div className="mt-4 alert alert-success">
          <p>Your email has been sent to {selectedInstructor.name} ({selectedInstructor.email}).</p>
        </div>
      )}
    </div>
  );
};

export default InstructorContactPage;
