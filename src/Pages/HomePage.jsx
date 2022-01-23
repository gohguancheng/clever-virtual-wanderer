import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import UsernameInput from "../Components/UsernameInput";

const HomePage = ({ setUsername }) => {
  console.log("render HomePage")
  return (
    <div className="container" id="home-page">
      <h1>This is my Home Page</h1>
      <p>Welcome to the Clever (Virtual) Wanderer App.</p>
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
