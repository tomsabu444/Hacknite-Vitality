import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";


import "./App.css";

function ImageToOcr() {
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const FIXED_INPUT_TEXT = import.meta.env.VITE_FIXED_INPUT_TEXT; // Load from env
  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(false);

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

      // Save data to text file
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
    a.download = "AnswerSheet.txt";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  return (
    <>
      {/* ... (Other parts of your component) */}

      <div className="card">
        <input type="file" />
        {/* Input text field removed */}

        <button
          disabled={loading}
          onClick={() => fetchDataFromGeminiProVisionAPI()}
        >
          {loading ? "Loading..." : "Submit Button"}
        </button>
        <hr />
        <div>Response: {data}</div>
      </div>
    </>
  );
}

export default ImageToOcr;
