import React from "react";
import "../styles/Home.css";
import backgroundImage from "../assets/logo1.jpg"; // ✅ Import the background image

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="overlay">
        <h1 className="home-title">
          <span className="meal-icon">🍽️</span> Share-a-Meal
        </h1>
        <p className="home-quote">
          “No one has ever become poor by giving.” <br />
          <span className="quote-author">- Anne Frank</span>
        </p>
        <footer className="home-footer">Together, we make a difference!</footer>
      </div>
    </div>
  );
};

export default Home;
