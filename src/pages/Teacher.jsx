import { useState } from "react";
import styled from "styled-components";
import { GoogleGenerativeAI } from "@google/generative-ai";

function Teacher() {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const FIXED_INPUT_TEXT = import.meta.env.VITE_FIXED_INPUT_TEXT; // Load from env
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

  async function fetchDataFromGeminiProVisionAPI() {
    try {
      setLoading(true);
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

      // Select each file input by its unique ID
      const answerKeyInput = document.querySelector("#answer-key-input").files[0];
      const answerSheetInput = document.querySelector("#answer-sheet-input").files[0];
      const questionPaperInput = document.querySelector("#question-paper-input").files[0];

      // Convert each file to the required generative part format
      const answerKeyPart = answerKeyInput ? await fileToGenerativePart(answerKeyInput) : null;
      const answerSheetPart = answerSheetInput ? await fileToGenerativePart(answerSheetInput) : null;
      const questionPaperPart = questionPaperInput ? await fileToGenerativePart(questionPaperInput) : null;

      // Prepare the parts array, excluding any undefined entries
      const parts = [FIXED_INPUT_TEXT, answerKeyPart, answerSheetPart, questionPaperPart].filter(part => part !== null);

      const result = await model.generateContent(parts);
      const text = await result.response.text();
      setLoading(false);
      setData(text);
      // Removed saveDataToFile(text);
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

  return (
    <Container>
      <div className="card">
        <label htmlFor="answer-key-input">Answer Key:</label>
        <input type="file" id="answer-key-input" />
        <label htmlFor="answer-sheet-input">Answer Sheet:</label>
        <input type="file" id="answer-sheet-input" />
        <label htmlFor="question-paper-input">Question Paper:</label>
        <input type="file" id="question-paper-input" />

        <button
          disabled={loading}
          onClick={() => fetchDataFromGeminiProVisionAPI()}
        >
          {loading ? "Loading..." : "Check "}
        </button>
        <hr />
        <div>Response: {data}</div>
      </div>
    </Container>
  );
}

export default Teacher;

const Container = styled.div`
  display: flex;
  flex-direction: column; /* Arrange items vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  height: 100vh; /* Make container take full viewport height */
  width: 100%; /* Make container take full viewport width */
  padding: 20px;

  .card {
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }
`;