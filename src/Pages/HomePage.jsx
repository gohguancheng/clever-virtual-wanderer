import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return <div>
      <h1>This is my Home Page</h1>
      <p>Welcome to the clever (virtual) wanderer App.</p>
      <Link to={"/about"}><button> Click here to learn about the App! </button></Link>
  </div>;
};

export default HomePage;

