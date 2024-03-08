import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/teacher" element={<Teacher/>} />
          <Route exact path="/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
