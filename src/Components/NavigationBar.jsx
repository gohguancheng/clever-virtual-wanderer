import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const NavigationBar = ( { status, current } ) => {
  return <div className = "bg-yellow-200">
  <ul className='flex justify-center'>

    <Link to="/"> <li className="bg-green-300 rounded-lg p-1 text-sm m-2 text-blue-900 hover:font-black">🏡Home</li> </Link> 
      <Link to="about"> <li className="bg-green-300 rounded-lg p-1 text-sm m-2 text-blue-900 hover:font-black">❓About</li> </Link> 
      {(current.country === undefined) ? null : (<Link to="regions"> <li className="bg-green-300 rounded-lg p-1 text-sm m-2 text-blue-900 hover:font-black">🌏Globe</li> </Link>)}
      
  </ul>
  {(status === "Countries data received") ? null : (<h4 className='text-xs font-thin text-blue-900'>⚒️Data Status: {status} </h4>) }
  </div>;
};

export default NavigationBar;
