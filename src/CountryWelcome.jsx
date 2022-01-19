import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Country from "./Country";

const randomIndexGenerator = (array) => {
  return Math.floor(Math.random() * array.length);
}

const CountryWelcome = (props) => {
  const [country, setCountry] = useState("Paradise");
  const { regionName } = useParams();

  useEffect(() => {
      
    const fullData = props.data;
    const countryRegionList = fullData.filter((element) => {
      return element.subregion === regionName;
    });
    const countryList = countryRegionList.map((element) => {
      return element.name;
    });
    const indexSelector = randomIndexGenerator(countryList);
    const generatedCountry = countryList[indexSelector];
    setCountry(generatedCountry);
    const countryData = fullData.filter((element) => {
      return element.name === country;
    });
    console.log(countryData);
    props.handleCountryUpdate(countryData);

  }, [props.data]);
  

  return (
    <div>
      <h3>Welcome to {country}!</h3>
      <p>
        Let's learn more about {country} through a quiz.
        <br /> Answer carefully, as your quiz score will affect what you see
        later.
      </p>
      <Link to={`/regions/${regionName}/quiz/${country}`}>
        <button>Take the quiz!</button>
      </Link>
    </div>
  );
};

export default CountryWelcome;
