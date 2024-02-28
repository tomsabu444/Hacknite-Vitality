import Navbar from "../component/Navbar";
import React, { useState } from "react";
import "./Home.css";
import { openPopup } from "./Appp.js";

function Home() {
  return (
    <>
      <Navbar />
      <section className="home">
        <img src="src/assets/mount2.png" className="mount2" alt="mount2" />
        <img src="src/assets/mount1.png" className="mount1" alt="mount1" />
        <img src="src/assets/bush2.png" className="bush2" alt="bush2" />
        <img src="src/assets/bush1.png" className="bush1" alt="bush1" />
        <h1 className="title">Checkit</h1>
        <div className="mmmm">
          <button className="btn" type="button" onClick={openPopup}>
            Start Now
          </button>
          <div className="main" id="contt">
            <div className="containerr">
              <div className="continue">
                <div className="cont">
                  <button className="conttttt">
                    <a href="draganddrop.html">Continue</a>
                  </button>
                </div>
              </div>
              <div className="inst">
                <h1>INSTRUCTIONS</h1>
                <span>Guidelines for Uploading and Processing Exam Papers</span>
                <p>
                  - Ensure the exam paper is clear and legible.
                  <br />
                  - Upload the exam paper in a standard digital format, such as
                  JPEG or PNG.
                  <br />
                  - Make sure the entire paper is visible and not cropped or cut
                  off.
                  <br />
                  - Upload one exam paper at a time.
                  <br />
                  - Verify that all pages of the exam paper are included in the
                  upload.
                  <br />
                  - Follow the provided guidelines to ensure smooth processing
                  and accurate results.
                  <br />
                  - Understand that the automatic exam paper checker may take
                  some time to process and grade the uploaded papers.
                  <br />
                  - Be patient and wait for the results to be generated.
                  <br />
                  - In case of any technical issues or questions about the
                  uploading process, contact customer support for assistance.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="src/assets/leaf2.png" className="leaf2 leaf" alt="leaf2" />
        <img src="src/assets/leaf1.png" className="leaf1 leaf" alt="leaf1" />
      </section>
      <section className="about">
        <div className="writtings">
          <h3 className="about">Project Details</h3>
          <h4>
            Title: AI-Powered Intelligent Grading System for Enhanced
            Educational Assessment
          </h4>
          <p>
            This abstract introduces a groundbreaking concept for an AI-Powered
            Intelligent Grading System, designed to revolutionize the
            traditional approach to evaluating answer scripts. By leveraging
            advanced Artificial Intelligence (AI) techniques, this system goes
            beyond conventional grading methodologies, introducing features such
            as natural language understanding, personalized feedback, and
            analytics for comprehensive educational assessment. The core of the
            system lies in its ability to comprehend and evaluate written
            responses through advanced natural language processing (NLP)
            algorithms. These algorithms analyze the content, structure, and
            coherence of answers, providing a more nuanced understanding of
            students' knowledge and proficiency. Additionally, the system
            employs machine learning to adapt and improve its grading accuracy
            over time, ensuring continuous enhancement in evaluation precision.
            The inclusion of personalized feedback mechanisms enhances the
            educational impact of the grading system. Students receive detailed
            insights into their performance, highlighting strengths and areas
            for improvement. The system generates constructive suggestions for
            improvement, fostering a proactive learning environment that
            promotes continuous academic growth. To ensure fairness and
            transparency, the AI-Powered Grading System incorporates
            explainability features, providing clear justifications for grading
            decisions. This transparency not only builds trust in the assessment
            process but also enables educators and students to understand the
            criteria used in evaluation. Furthermore, the system offers robust
            analytics tools for educators, providing valuable insights into
            class performance trends, identifying common misconceptions, and
            facilitating data-driven instructional decision-making. This feature
            aids educators in tailoring their teaching approaches to address
            specific challenges within the student cohort. Accessible through
            web-based interfaces, this system seamlessly integrates with
            existing educational platforms, providing a user-friendly experience
            for both educators and students. The AI-Powered Intelligent Grading
            System represents a paradigm shift in educational assessment,
            offering a comprehensive, efficient, and technologically advanced
            solution for evaluating answer scripts while promoting a more
            engaging and personalized learning experience.
          </p>
        </div>
      </section>
      <section class="services">
        <h1>Our Services</h1>
        <div class="smain">
          <div class="container">
            <div class="imgcontainer">
              <img id="imageLink" src="src/assets/icon.png" alt="services" />
            </div>
            <div class="ww">
              <h3 id="heading">AI-Powered Intelligent Grading System</h3>
              <p id="description">
                Revolutionizing answer script evaluation, our system employs
                advanced AI, NLP algorithms, and machine learning for precise,
                evolving grading. Educators benefit from streamlined processes
                and transparent justifications; students receive personalized
                feedback, fostering engagement. Institutions enjoy a
                comprehensive assessment solution for data-driven decisions. The
                system integrates seamlessly, promising continuous improvement
                and academic excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="ffmain">
          <h1>Checkit</h1>
          <p>
            Revolutionizing answer script evaluation, our system employs
            advanced AI, NLP algorithms, and machine learning for precise,
            evolving grading
          </p>
        </div>
        <div className="team">
          <h2>TEAM</h2>
          <br />
          Jishnu Mohan <br />
          Justin James <br />
          Tom Sabu <br />
          Akash Pradeep
        </div>
      </footer>
    </>
  );
}

export default Home;
