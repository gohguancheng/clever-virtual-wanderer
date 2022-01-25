import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import UsernameInput from '../Components/UsernameInput';

const HomePage = ({ setUsername }) => {
  return (
    <div className="container" id="home-page">
      <h2 className="m-5 text-2xl font-bold">Welcome to the Clever (Virtual) Wanderer App</h2>
      <h1 className="m-5 text-8xl">🌎</h1>
      <UsernameInput setUsername={setUsername} />
      <br />
      <div>
        <Link to={"/about"}>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"> Submit </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
