import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios"

function ImageToOcr() {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const FIXED_INPUT_TEXT = import.meta.env.VITE_FIXED_INPUT_TEXT; // Load from env
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);

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
      const response_text = text;

       // Send the text response to the Flask server using Axios
    const response = await axios.post('http://127.0.0.1:6000/process_image_data', {
      text: response_text
    });



      setLoading(false);
      setData(text);
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

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      setFileUploaded(true);
    }
  };

  return (
    <Container>
      <div className="response-section">
        <button disabled={loading} onClick={fetchDataFromGeminiProVisionAPI}>
          {loading ? "Loading.." : "Submit"}
        </button>
        <hr className="centered-hr" />
        <div className="centered-text">Response: {data}</div>
      </div>
      <div className="upload-section">
        <form className="file-upload-form">
          <label htmlFor="file" className="file-upload-label">
            <div className="file-upload-design">
              <svg viewBox="0 0 640 512" height="1em">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path>
              </svg>
              <p style={{ opacity: fileUploaded ? 0 : 1 }}>
                {fileUploaded ? "File Uploaded" : "Choose file"}
              </p>{" "}
              {/* Hide the "Choose file" text */}
              <p>Drag and Drop</p>
              <p>or</p>
              <span className="browse-button">Browse file</span>
            </div>
            <input
              id="file"
              type="file"
              onChange={handleFileChange}
              accept="image/*"
            />
          </label>
        </form>
      </div>
    </Container>
  );
}
export default ImageToOcr;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  height: 100vh; /* Adjust height as needed */

  .upload-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px; /* Adjust margin as needed */
  }
  button {
    background: linear-gradient(to right, blue, violet);
    padding: 10px 20px;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    margin: 20px 0;
    border: none;
  }
  button:hover {
    background: linear-gradient(to right, violet, blue);
  }
  .file-upload-form {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .file-upload-label input {
    display: none;
  }
  .file-upload-label svg {
    height: 50px;
    fill: rgb(82, 82, 82);
    margin-bottom: 20px;
  }
  .file-upload-label {
    cursor: pointer;
    background-color: #ddd;
    padding: 30px 70px;
    border-radius: 40px;
    border: 2px dashed rgb(82, 82, 82);
    box-shadow: 0px 0px 200px -50px rgba(0, 0, 0, 0.719);
  }
  .file-upload-design {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .browse-button {
    background-color: rgb(82, 82, 82);
    padding: 5px 15px;
    border-radius: 10px;
    color: white;
    transition: all 0.3s;
  }
  .browse-button:hover {
    background-color: rgb(14, 14, 14);
  }

  .response-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .centered-hr {
    width: 50%; /* Adjust width as needed */
    margin: 0 auto; /* Center horizontally */
  }

  .centered-text {
    text-align: center; /* Center text */
  }
`;
