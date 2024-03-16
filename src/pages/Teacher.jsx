  import { GoogleGenerativeAI } from "@google/generative-ai";
  import React, { useState } from 'react';
  import styled from 'styled-components';
  import { useNavigate } from 'react-router-dom';

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background: #f7f7f7; /* Soft background color */
  `;

  const Card = styled.div`
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 25px;
    border-radius: 8px;
    text-align: center;
    width: 100%;
    max-width: 400px; /* Maximum width of the card */
    margin: 10px;
  `;

  const StyledLabel = styled.label`
    display: block;
    margin: 10px 0;
    color: #333; /* Darker text for better readability */
  `;

  const StyledInput = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 15px; /* Space between the inputs */
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box; /* So padding doesn't affect the width */
  `;

  const StyledButton = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4caf50; /* Green background for the button */
    color: white;
    cursor: pointer;
    margin-top: 10px; /* Space above the button */
    margin-left: -3px;

    &:disabled {
      background-color: #ccc; /* Gray out the button when disabled */
    }

    &:hover:not(:disabled) {
      background-color: #45a049; /* Darker green on hover */
    }
  `;

  const ResponseContainer = styled.div`
    margin-top: 20px;
    word-break: break-all; /* Ensure long text doesn't overflow */
  `;

  function Teacher() {
    const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
    const FIXED_INPUT_TEXT = import.meta.env.VITE_FIXED_INPUT_TEXT;
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

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

        console.log(text);
        setLoading(false);
        setData(text);
        saveDataToFile(text);
        navigate('/student-marks', { state: { studentData: text } });
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
      a.download = "GeneratedContent.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }


    return (
      <Container>
        <Card>
          <StyledLabel htmlFor="answer-key-input">Answer Key:</StyledLabel>
          <StyledInput type="file" id="answer-key-input" />
          <StyledLabel htmlFor="answer-sheet-input">Answer Sheet:</StyledLabel>
          <StyledInput type="file" id="answer-sheet-input" />
          <StyledLabel htmlFor="question-paper-input">Question Paper:</StyledLabel>
          <StyledInput type="file" id="question-paper-input" />

          <StyledButton
            disabled={loading}
            onClick={() => fetchDataFromGeminiProVisionAPI()}
          >
            {loading ? "Loading..." : "Check Answers"}
          </StyledButton>
  {/* 
          {data && (
            <ResponseContainer>Response: <pre>{data}</pre></ResponseContainer>
          )} */}
        </Card>
      </Container>
    );
  }

  export default Teacher;



