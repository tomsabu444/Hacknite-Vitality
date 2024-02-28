import React, { useState } from "react";
import styled from "styled-components";

function Upload() {
  const [fileName1, setFileName1] = useState("");
  const [fileName2, setFileName2] = useState("");

  const handleFileUpload = (files, setFileName) => {
    if (files.length > 0) {
      const file = files[0];
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  return (
    <Container>
      <div className="main-container">
        <div className="container">
          <div className="inn">
            <div className="container1">
              <h3>Upload Teachers Answer Key</h3>
              <div
                className="dropZone"
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={() =>
                  document
                    .getElementById("dropZone1")
                    .classList.add("highlight")
                }
                onDragLeave={() =>
                  document
                    .getElementById("dropZone1")
                    .classList.remove("highlight")
                }
                onDrop={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("dropZone1")
                    .classList.remove("highlight");
                  handleFileUpload(event.dataTransfer.files, setFileName1);
                }}
                onClick={() => document.getElementById("fileInput1").click()}
              >
                {fileName1 ? fileName1 : "Click here or drop an image"}
              </div>
              <div className="fileName">{fileName1}</div>
              <input
                type="file"
                className="fileInput"
                id="fileInput1"
                onChange={(event) =>
                  handleFileUpload(event.target.files, setFileName1)
                }
              />
            </div>
            <div className="container2">
              <h3>Upload Students Answer Sheet</h3>
              <div
                className="dropZone"
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={() =>
                  document
                    .getElementById("dropZone2")
                    .classList.add("highlight")
                }
                onDragLeave={() =>
                  document
                    .getElementById("dropZone2")
                    .classList.remove("highlight")
                }
                onDrop={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("dropZone2")
                    .classList.remove("highlight");
                  handleFileUpload(event.dataTransfer.files, setFileName2);
                }}
                onClick={() => document.getElementById("fileInput2").click()}
              >
                {fileName2 ? fileName2 : "Click here or drop an image"}
              </div>
              <div className="fileName">{fileName2}</div>
              <input
                type="file"
                className="fileInput"
                id="fileInput2"
                onChange={(event) =>
                  handleFileUpload(event.target.files, setFileName2)
                }
              />
            </div>
          </div>
          <div className="btnn">
            <button>
              <a href="/">Submit</a>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Upload;

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
  .container1,
  .container2 {
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
