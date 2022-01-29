import React from "react";
import notFoundImage from "../Images/image-not-found.svg";

const Flags = ({ country, src, currentCountry }) => {
    console.log(notFoundImage);
    console.log(src);

  if (country === currentCountry) {
    return (
      <span className="inline-grid m-4 ">
        <img
          className="h-56 aspect-auto p-2 rounded outline outline-4 outline-offset-2 outline-green-400 shadow-lg shadow-green-400"
          src={(src === undefined) ? notFoundImage : src}
          title={country}
        ></img>
      </span>
    );
  } else {
    return (
      <span className="inline-grid m-2">
        <img className="h-20 aspect-auto" src={(src === undefined) ? notFoundImage : src} title={country}></img>
      </span>
    );
  }
};

export default Flags;
// style={style}
