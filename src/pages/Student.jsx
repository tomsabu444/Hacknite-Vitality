import React, { useState } from "react";
import styled from "styled-components";

function Student() {
  const [students, setStudents] = useState([{ id: "", file: "" }]);

  const handleFileUpload = (file, index) => {
    const updatedStudents = [...students];
    updatedStudents[index].file = file;
    setStudents(updatedStudents);
  };

  const handleAddStudent = () => {
    setStudents([...students, { id: "", file: "" }]);
  };

  const handleStudentIdChange = (event, index) => {
    const updatedStudents = [...students];
    updatedStudents[index].id = event.target.value;
    setStudents(updatedStudents);
  };

  const handleRemoveStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  return (
    <Container>
      <div className="main-container">
        <div className="container">
          <div className="inn">
            {students.map((student, index) => (
              <div className="container1" key={index}>
                <h3>Upload Student Answer Sheet</h3>
                <input
                  type="text"
                  placeholder="Student ID"
                  value={student.id}
                  onChange={(e) => handleStudentIdChange(e, index)}
                />
                <div
                  className="dropZone"
                  onDragOver={(event) => event.preventDefault()}
                  onDragEnter={() =>
                    document
                      .getElementById(`dropZone${index}`)
                      .classList.add("highlight")
                  }
                  onDragLeave={() =>
                    document
                      .getElementById(`dropZone${index}`)
                      .classList.remove("highlight")
                  }
                  onDrop={(event) => {
                    event.preventDefault();
                    document
                      .getElementById(`dropZone${index}`)
                      .classList.remove("highlight");
                    handleFileUpload(event.dataTransfer.files[0], index);
                  }}
                  onClick={() =>
                    document.getElementById(`fileInput${index}`).click()
                  }
                >
                  {student.file
                    ? student.file.name
                    : "Click here or drop an image"}
                </div>
                <div className="fileName">{student.file.name}</div>
                <input
                  type="file"
                  className="fileInput"
                  id={`fileInput${index}`}
                  onChange={(event) =>
                    handleFileUpload(event.target.files[0], index)
                  }
                />
                <button onClick={() => handleRemoveStudent(index)}>
                  Remove Student
                </button>
              </div>
            ))}
          </div>
          <div className="btnn">
            <button onClick={handleAddStudent}>Add Student</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Student;

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }
  body {
    background: linear-gradient(to right, #79d6e9be, #5c6bc0a1);
  }
  .main-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .inn {
    display: flex;
    justify-content: space-around;
  }
  .container {
    background: rgba(163, 221, 230, 0.753);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 20px;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 20px;
  }
  .container1 {
    margin: 30px;
  }
  .dropZone {
    width: 300px;
    height: 300px;
    border: 2px dashed #000000;
    text-align: center;
    line-height: 300px;
    margin: 20px auto;
    cursor: pointer;
  }
  .dropZone.highlight {
    border-color: #028002;
  }
  .fileInput {
    display: none;
  }
  h3 {
    color: #373535;
    margin-bottom: 2.3rem;
    font-size: 1.45rem;
  }
  button {
    outline: none;
    border: none;
    background-color: transparent;
  }
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    padding: 10px 20px;
    background: linear-gradient(#333, #111);
    border-radius: 15px;
  }
  .btnn {
    display: flex;
    justify-content: center;
  }
`;
