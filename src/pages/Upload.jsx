import React, { useState } from "react";
import "./Upload.css";
import {} from "./App.js";

const Upload = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="inn">
          <div className="container1">
            <h3>Upload Teachers Answer Key</h3>
            <div className="dropZone" id="dropZone1">
              Click here or drop an image
            </div>
            <div className="fileName" id="fileName1"></div>
            <input type="file" className="fileInput" id="fileInput1" />
          </div>
          <div className="container2">
            <h3>Upload Students Answer Sheet</h3>
            <div className="dropZone" id="dropZone2">
              Click here or drop an image
            </div>
            <div className="fileName" id="fileName2"></div>
            <input type="file" className="fileInput" id="fileInput2" />
          </div>
        </div>
        <div className="btnn">
          <button>
            <a href="">
              <i className="fa-solid fa-cloud-arrow-up"></i> Submit
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
