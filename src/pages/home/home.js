import React from "react";
import "./home.css";
import theBasics3 from "../../assets/image/the-basics3.png";

function Home() {
  return (
    <div className="home">
      <div className="home-main-container">
        <div className="img-container">
          <img src={theBasics3} alt="User Connected with the World" />
        </div>
      </div>
    </div>
  );
}

export default Home;
