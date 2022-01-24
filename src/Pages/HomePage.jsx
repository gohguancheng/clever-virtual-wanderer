import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import UsernameInput from "../Components/UsernameInput";

const HomePage = ({ setUsername }) => {
  return (
    <div className="container" id="home-page">
      <h2>Welcome to the Clever (Virtual) Wanderer App</h2>
      <h1>🌎</h1>
      <UsernameInput setUsername={setUsername} />
      <br />
      <div>
        <Link to={"/about"}>
          <button> Submit </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
