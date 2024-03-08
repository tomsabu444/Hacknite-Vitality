import React, { useState } from "react";
import styled from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";


function TeacherAnswerKey() {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const FIXED_INPUT_TEXT = import.meta.env.VITE_FIXED_INPUT_TEXT;
  const [fileName, setFileName] = useState("");
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (files) => {
    if (files.length > 0) {
      const file = files[0];
      setFileName(file.name);
    } else {
      setFileName("");
    }
  };

  async function fetchDataFromGeminiProVisionAPI() {
    try {
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      const fileInputEl = document.querySelector("input[type=file]");
      const imageParts = await Promise.all(
        [...fileInputEl.files].map(fileToGenerativePart)
      );

      const result = await model.generateContent([
        FIXED_INPUT_TEXT,
        ...imageParts,
      ]);
      const text = result.response.text();

      setLoading(false);
      setData(text);

      saveDataToFile(text);
    } catch (error) {
      setLoading(false);
      console.error("fetchDataFromGeminiAPI error: ", error);
    }
  }

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(",")[1]);
      reader.readAsDataURL(file);
    });
    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }

  function saveDataToFile(data) {
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "AnswerKey.txt";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  return (
    <Container>
      <div className="main-container">
        <div className="container">
          <div className="inn">
            <div className="container1">
              <h3>Upload Teacher's Answer Key</h3>
              <div
                className="dropZone"
                onDragOver={(event) => event.preventDefault()}
                onDragEnter={() =>
                  document.getElementById("dropZone1").classList.add("highlight")
                }
                onDragLeave={() =>
                  document.getElementById("dropZone1").classList.remove("highlight")
                }
                onDrop={(event) => {
                  event.preventDefault();
                  document
                    .getElementById("dropZone1")
                    .classList.remove("highlight");
                  handleFileUpload(event.dataTransfer.files);
                }}
                onClick={() => document.getElementById("fileInput1").click()}
              >
                {fileName ? fileName : "Click here or drop an image"}
              </div>
              <div className="fileName">{fileName}</div>
              <input
                type="file"
                className="fileInput"
                id="fileInput1"
                onChange={(event) => handleFileUpload(event.target.files)}
              />
            </div>
          </div>
          <button 
            disabled={loading || !fileName} // Disable if loading or no file
            onClick={() => fetchDataFromGeminiProVisionAPI()}
          >
            {loading ? "Loading..." :  "Process and Generate Text"}
          </button>
          <hr />
          <div>Response: {data}</div>
        </div>
      </div>
    </Container>
  );
}

export default TeacherAnswerKey;

