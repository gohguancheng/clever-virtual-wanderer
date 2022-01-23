import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = ( { status, current } ) => {
  console.log("nav:", current);
  return <div className = "topnav">
  
    <Link to="/"> <h4 className="nav">Home</h4> </Link> 
      <Link to="about"> <h4 className="nav">About</h4> </Link> 
      {(current.country === undefined) ? null : (<Link to="regions"> <h4 className="nav">Globe</h4> </Link>)}
      <h4> Data Fetch Status: {status} </h4> 
      {/* <Outlet /> */}

  </div>;
};

export default NavigationBar;
