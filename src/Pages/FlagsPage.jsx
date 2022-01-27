import React from "react";
import { useParams, Link } from "react-router-dom";
import Flags from "../Components/Flags";


const highlightStyle = {
  height: "30vmin",
  width: "auto",
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
      <h4 className="m-5 text-2xl font-bold">Your Destination shall be: </h4>
      <h1 className="m-5 text-4xl font-bold"> {current.country} </h1>      
      <p className="text-sm">
        Let's learn more about {current.country} through a quiz.
        <br />❗Answer carefully, as your quiz score will affect what you see
        later.
      </p>
      <div className="m-5">
      <Link to={`/${current.subregion}/${current.country}/quiz`}>
        {" "}
        <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"> Take the pre-boarding quiz! </button>{" "}
      </Link>
      </div>
      <div >{flags}</div>
    </div>
  );
};

export default FlagsPage;
