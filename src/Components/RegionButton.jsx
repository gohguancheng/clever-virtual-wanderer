import React from "react";
import { Link } from "react-router-dom";
import { randomArrayElementSelector } from "../Data_Logic/functions";

const RegionButton = ({ data, subregion, setCurrent }) => {
  const handleAssignCountry = (subregion) => {
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
  };

  return (
    <Link to={`${subregion}/countries`}>
      <button
        className="region-button"
        id={`${subregion}`}
        onClick={() => handleAssignCountry(subregion)}
      >
        {subregion}
      </button>
    </Link>
  );
};

export default RegionButton;
