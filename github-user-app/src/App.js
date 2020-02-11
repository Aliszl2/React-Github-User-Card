import React from "react";
import GithubUserData from "./components/GithubUserData";


import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src="./assets/lambdalogo" alt="Lambda Logo" />
        <p>
          <span role="img">❤️'s</span>
        </p>
        <img src="./assets/githublogo.png" alt="GitHub Logo" />
      </div>
      <div className="cards">
        <GithubUserData />
        </div>
    </div>
  );
}

export default App;
