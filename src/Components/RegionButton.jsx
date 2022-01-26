import React from "react";
import { Link } from "react-router-dom";
import { randomArrayElementSelector } from "../Data_Logic/functions";

const RegionButton = ({ data, subregion, setCurrent }) => {
  
  const handleAssignCountry = (subregion) => {
    if (subregion === "Out Of This World") {
      setCurrent((prevState) => ({
        ...prevState,
        ...{
          country: "nasa",
        },
      }));
    } else {
      let comparator = null;
      if (subregion === "Antarctica & Southern Ocean") {
        comparator = "";
      } else {
        comparator = subregion;
      }
      const countriesBySubregion = data.filter((element) => {
        return element.subregion === comparator;
      });
  
      const arrayOfCountries = countriesBySubregion.map((element) => {
        return element.name.common;
      });
      const result = randomArrayElementSelector(arrayOfCountries);
  
      setCurrent((prevState) => ({
        ...prevState,
        ...{
          subregion: comparator,
          countryList: arrayOfCountries,
          country: result,
        },
      }));
    }
  };
  if (subregion === "Out Of This World") {
    return    ( <div className="w-fit inline flex-wrap">
    <Link to={`/${subregion}/GroundControl`}>
      <button
        className="m-1 w-36 h-16 no-underline box-border inline cursor-pointer outline-0 border-0 bg-lime-400 rounded-3xl text-base font-semibold text-green-900 bg-auto shadow-xl"
        id={`${subregion}`}
        onClick={() => handleAssignCountry(subregion)}
      >
        {subregion}
      </button>
    </Link>
    </div>
  );
  } else {

    return (
      <div className="w-fit inline flex-wrap">
      <Link to={`${subregion}/countries`}>
        <button
          className="m-1 w-36 h-16 no-underline box-border inline cursor-pointer outline-0 border-0 bg-lime-400 rounded-3xl text-base font-semibold text-green-900 bg-auto shadow-xl"
          id={`${subregion}`}
          onClick={() => handleAssignCountry(subregion)}
        >
          {subregion}
        </button>
      </Link>
      </div>
    );
  }

};

export default RegionButton;
