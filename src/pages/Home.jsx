import React, { useState } from "react";
import "./Home.css";
import { openPopup } from "./App.js";

function Home() {
  return (
    <>
      <section className="home">
        <img src="src/assets/mount2.png" className="mount2" alt="mount2" />
        <img src="src/assets/mount1.png" className="mount1" alt="mount1" />
        <img src="src/assets/bush2.png" className="bush2" alt="bush2" />
        <img src="src/assets/bush1.png" className="bush1" alt="bush1" />
        <h1 className="title">Website name</h1>
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
                <p>
                  <span>Ensure Legibility:</span> Make sure the exam paper is
                  clear and legible. Illegible handwriting or blurry text may
                  result in inaccuracies in grading. <br />
                  <span>Use Standard Formats:</span> Upload the exam paper in a
                  standard digital format such as PDF or image files (JPEG, PNG,
                  etc.). Ensure that the entire paper is visible and not cropped
                  or cut off. <br />
                  <span>Single Document Upload:</span> Upload one exam paper at
                  a time. Avoid uploading multiple papers simultaneously to
                  prevent confusion and ensure accurate processing. <br />
                  <span>Check for Completeness:</span> Verify that all pages of
                  the exam paper are included in the upload. Missing pages can
                  lead to incomplete grading. <br />
                  <span>Follow Naming Conventions:</span> If there are specific
                  naming conventions or instructions for naming the files,
                  adhere to them. This helps in organizing and processing the
                  uploaded papers efficiently. <br />
                  <span>Review Guidelines:</span> Familiarize yourself with any
                  specific guidelines or requirements provided by the automatic
                  exam paper checker. Follow these guidelines to ensure smooth
                  processing and accurate results. <br />
                  <span>Privacy and Security:</span> Be mindful of any sensitive
                  information present on the exam paper, such as student names
                  or identification numbers. Ensure that such information is
                  appropriately redacted or anonymized before uploading. <br />
                  <span>Submit Corrections:</span> If any errors are identified
                  after uploading, follow the designated procedure for
                  submitting corrections or revisions. This may involve
                  re-uploading the corrected version of the exam paper. <br />
                  <span>Patience During Processing:</span> Understand that the
                  automatic exam paper checker may take some time to process and
                  grade the uploaded papers, especially during peak periods. Be
                  patient and wait for the results to be generated. <br />
                  <span>Contact Support if Needed:</span> If you encounter any
                  technical issues or have questions about the uploading
                  process, don't hesitate to contact customer support for
                  assistance. They are there to help you navigate any challenges
                  you may encounter.
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
    </>
  );
}

export default Home;
