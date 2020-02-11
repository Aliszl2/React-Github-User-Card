import React from "react";
import GithubUserData from "./components/GithubUserData";
import AliszlUserData from "./components/AliszlUserData";
import img1 from "./assets/githublogo.png"
import img2 from "./assets/lambdalogo.png"
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={img2} alt="Lambda Logo" />
        <p>
          <span description="a" role="img">❤️'s</span>
        </p>
        <img src={img1} alt="GitHub Logo" />
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
