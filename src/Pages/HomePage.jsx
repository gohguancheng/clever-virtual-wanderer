import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const inputValue = useRef()

  return (
    <div className="container" id="home-page">
      <h1>This is my Home Page</h1>
      <p>Welcome to the Clever (Virtual) Wanderer App.</p>
    <form>
      <label htmlFor="usernameInput"><p>Please tell us you name.</p></label>
        <input 
        ref={inputValue}
        type="text" 
        placeholder="Your Name Here"
        ></input>


      

      <Link to={"/about"}>
        <button> Submit </button>
      </Link>
    </form>


    </div>
  );
};

export default HomePage;
