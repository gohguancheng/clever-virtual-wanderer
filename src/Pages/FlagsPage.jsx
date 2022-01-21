import React from "react";
import { useParams, Link } from "react-router-dom";
import Flags from "../Components/Flags";
import '../Styles/FlagsPage.css'

const highlightStyle = {
  height: "25vh",
  width: "70vw",
  border: "1vmin solid limegreen",
  padding: "1vmin",
  boxShadow: "1vmin 2vmin 2vmin limegreen",
};

const FlagsPage = ({ data, current }) => {
  const { regionName: currentRegion } = useParams();
  const chosen = data.filter((element) => {
    return element.name.common === current.country;
  });
  const flags = data
    .filter((element) => {
      return element.subregion === currentRegion;
    })
    .map((element, i) => {
      return (
        <Flags
          key={i}
          style={highlightStyle}
          country={element.name.common}
          src={element.flags[0]}
          currentCountry={current.country}
        />
      );
    });
  return (
    <div className="container" id="flags-page">
      <h4>Your Destination shall be: </h4>
      <h1> {current.country} </h1>      
      <p>
        Let's learn more about {current.country} through a quiz.
        <br /> Answer carefully, as your quiz score will affect what you see
        later.
      </p>
      <Link to={`/${current.region}/${current.country}`}>
        {" "}
        <button> Take the pre-boarding quiz! </button>{" "}
      </Link>
      <div>{flags}</div>
    </div>
  );
};

export default FlagsPage;
