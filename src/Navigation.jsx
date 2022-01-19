import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return <div className = "topnav">
      <Link to="/"> <h4>Home</h4> </Link> 
      <Link to="about"> <h4>About</h4> </Link> 
      <Link to="regions"> <h4>Regions</h4> </Link> 
      <Outlet />
  </div>;
};

export default Navigation;
