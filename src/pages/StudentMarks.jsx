// StudentMarks.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const StudentMarks = () => {
  const location = useLocation();
  const studentData = location.state?.studentData; // Retrieve the passed state

  return (
    <div>
      <h1>Mark Sheet</h1>
      <p>{studentData}</p> {/* Render your data here */}
    </div>
  );
};

export default StudentMarks;
