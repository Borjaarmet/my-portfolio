import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__banner">
        <h1>
          <strong>Borja Armet</strong>
        </h1>
      </div>
      <div className="home__subbanner">
        Junior MERN Full stack Web Developer
      </div>
      <div className="home__content">
        <div className="home__content__title">
          <h2>My projects</h2>
        </div>
        <div className="home__content__clusters">
          <div>
            <a href="/">
              <h3>Project 1</h3>
            </a>
          </div>
          <div>
            <a href="/">
              <h3>Project 2</h3>
            </a>
          </div>
          <div>
            <a href="/">
              <h3>Project 3</h3>
            </a>
          </div>
          <div>
            <a href="/">
              <h3>Project 4</h3>
            </a>
          </div>
          <div>
            <a href="/">
              <h3>Project 5</h3>
            </a>
          </div>
          <div>
            <a href="/">
              <h3>Project 6</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
