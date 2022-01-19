import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  return <div>
      <h1>This is my Home Page</h1>
      <p>Welcome to the clever (virtual) wanderer App.</p>
      <Link to={"/about"}>Click here to learn about the App!</Link>
  </div>;
};

export default Home;

