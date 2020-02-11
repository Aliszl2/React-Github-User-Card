import React from "react";
import GithubUserData from "./components/GithubUserData";
import AliszlUserData from "./components/AliszlUserData";


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
        <h1>My GitHubData:</h1>
      <AliszlUserData/>
      <h1>My Folowers:</h1>
        <GithubUserData />
        </div>
    </div>
  );
}

export default App;
