import React from "react";
import "./Home.css";

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
          <button className="btn" type="button" onclick="openPopup()">
            {" "}
            Start Now
          </button>
        </div>
        <img src="assets/leaf2.png" className="leaf2 leaf" alt="leaf2" />
        <img src="assets/leaf1.png" className="leaf1 leaf" alt="leaf1" />
      </section>
    </>
  );
}

export default Home;
