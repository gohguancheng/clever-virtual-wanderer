import React from 'react';
import { Link } from 'react-router-dom';

const Region = (props) => {
  return (
    <button className={props.regionName}>
    <Link to={props.regionName}>
    {props.index} {props.regionName}
    </Link>  
  </button>)
};

export default Region;
