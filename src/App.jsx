import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import ImageToOcr from "./pages/ImageToOcr";
import SemanticSimilarityCalculator from "./pages/SemanticSimilarityCalculator";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SemanticSimilarityCalculator />} />
          <Route exact path="/upload" element={<ImageToOcr />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
