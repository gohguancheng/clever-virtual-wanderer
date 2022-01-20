import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Flags from '../Components/Flags';

const highlightStyle = {height: "30vh", border: "1vmin solid limegreen",  padding: "1vmin", boxShadow: "1vmin 2vmin 2vmin limegreen"}

const CountriesPage = ({ data, current }) => {
    
    const { regionName: currentRegion } = useParams();

    console.log("current", current);
    const chosen = data.filter((element) => {
        return element.name.common === current.country})
    const flags = 
    data
    .filter((element) => {return element.subregion === currentRegion})
    .map( (element, i) => {return <Flags key={i} style={highlightStyle} country={element.name.common} src={element.flags[0]} currentCountry={current.country} />})
    return <div>
        <h4>Your Destination shall be: </h4>
        <h1> {current.country} </h1>
        <Link to={`/${current.region}/${current.country}`}> <button> Take the pre-boarding quiz! </button> </Link>
        <div>
        {flags}
        </div>
    </div>;
};

export default CountriesPage;