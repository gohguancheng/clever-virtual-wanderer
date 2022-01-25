import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = ( { status, current } ) => {
  return <div className = "topnav">
  <ul className='flex justify-center'>

    <Link to="/"> <li className="bg-amber-300 rounded-lg p-1 text-sm m-2 text-blue-600 hover:text-blue-600">🏡 Home</li> </Link> 
      <Link to="about"> <li className="bg-amber-300 rounded-lg p-1 text-sm m-2 text-blue-600 hover:text-blue-600">❔ About</li> </Link> 
      {(current.country === undefined) ? null : (<Link to="regions"> <li className="bg-amber-300 rounded-lg p-1 text-sm m-2 text-blue-600 hover:text-blue-600">🌐 Globe</li> </Link>)}
      
  </ul>
  <h4>⚒️ Data Status: {status} </h4> 
  </div>;
};

export default NavigationBar;
