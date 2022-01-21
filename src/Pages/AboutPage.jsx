import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="container" id="about-page">
      <h1>About the App</h1>
      <h4 style={{color: "darkgreen"}}>Not all who (virtually) wander are lost..</h4>
      <h3>Be Clever</h3>
      <p>
        {" "}
        Contextual knowledge improves the experiences of the place we visit.
        <br /> Your knowledge determines how much you see.{" "}
      </p>
      <h3>Go Virtual</h3>
      <p>
        Inspired by a prevailing anxiety associated with physical travel
        during a pandemic,
        <br />
        we thought perhaps visiting places virtually is a better option for now.{" "}
      </p>
      <Link to={"/regions"}><button> Start your virtual journey today! </button></Link>
    </div>
  );
};

export default AboutPage;
