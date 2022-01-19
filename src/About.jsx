import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About the App</h1>
      <p>Not all who (virtually) wander are lost..</p>
      <h4>Be Clever</h4>
      <p>
        {" "}
        Contextual knowledge improves the experiences of the place we visit.
        <br /> Your knowledge determines how much you see.{" "}
      </p>
      <h4>Go Virtual</h4>
      <p>
        Inspired by a prevailing anxiety associated with physical travel
        during a pandemic,
        <br />
        we thought perhaps visiting places virtually is a better option for now.{" "}
      </p>
      <Link to={"/regions"}>Click here to start your virtual journey today!</Link>
    </div>
  );
};

export default About;
