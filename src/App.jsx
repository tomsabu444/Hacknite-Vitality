import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/student-mark" element={<Studentmarks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
