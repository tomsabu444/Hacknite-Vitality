import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Upload from "./pages/Upload";
import ImageToOcr from "./pages/ImageToOcr";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/upload" element={<ImageToOcr />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
