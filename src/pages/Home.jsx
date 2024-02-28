import React from "react";

function Home() {
  return (
    <>
      <section className="home">
        <img src="src/assets/mount2.png" className="mount2" alt="mount2" />
        <img src="src/assets/mount1.png" className="mount1" alt="mount1" />
        <img src="src/assets/bush2.png" className="bush2" alt="bush2" />
        <img src="src/assets/bush1.png" className="bush1" alt="bush1" />
        <h1 class="title">Website name</h1>
        <div class="mmmm">
          <button class="btn" type="button" onclick="openPopup()">
            {" "}
            Start Now
          </button>
        </div>
      </section>
    </>
  );
}

export default Home;
