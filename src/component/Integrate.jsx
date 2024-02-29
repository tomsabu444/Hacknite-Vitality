import React, { useState } from "react";
import axios from "axios";

const SemanticSimilarityCalculator = () => {
  const [textTeacher, setTextTeacher] = useState("");
  const [textStudent, setTextStudent] = useState("");
  const [result, setResult] = useState(null);

  const calculateSimilarity = async () => {
    try {
      const response = await axios.post("/calculate_similarity", {
        text_teacher: textTeacher,
        mark_divisions: {
          "Process of photoynthesis": 2,
          "Role of Chlorophyll": 3,
        },
        text_student: textStudent,
      });
      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <label>
        Text Teacher:
        <input
          type="text"
          value={textTeacher}
          onChange={(e) => setTextTeacher(e.target.value)}
        />
      </label>
      <br />
      <label>
        Text Student:
        <input
          type="text"
          value={textStudent}
          onChange={(e) => setTextStudent(e.target.value)}
        />
      </label>
      <br />
      <button onClick={calculateSimilarity}>Calculate Similarity</button>
      {result && (
        <div>
          <p>Semantic similarity score: {result.semantic_similarity_score}</p>
          <p>Total mark for the question: {result.total_mark}</p>
          <p>Attained mark: {result.attained_mark}</p>
        </div>
      )}
    </div>
  );
};

export default SemanticSimilarityCalculator;
