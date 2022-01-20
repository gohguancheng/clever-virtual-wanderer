import React from 'react';
import { Link } from 'react-router-dom';
import { randomArrayElementSelector } from '../Data_Logic/functions';



const RegionButton = ({ data, index, region, current, setCurrent }) => {

  const handleAssignCountry = (r) => {
    console.log("clicked region:", r)
    const countriesByRegion = data.filter((element) => {
      return element.subregion === r;
    });
    console.log(countriesByRegion);
    const arrayOfCountries = countriesByRegion.map((element) => {
      return element.name.common;
    });
    const result = randomArrayElementSelector(arrayOfCountries);

    setCurrent( (prevState) => ({...prevState, ...{region: r, countryList: arrayOfCountries, country : result}}) )
  }

  return (
    <Link to={`${region}/countries`}>
    <button className={region} onClick={()=>handleAssignCountry(region)}>
    {index}. {region}
    </button>
    </Link>  
  )
};

export default RegionButton;
