import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <div>Home</div>
      <Link to='/shop'>Shop</Link>
    </React.Fragment>
  );
};

export default Home;
