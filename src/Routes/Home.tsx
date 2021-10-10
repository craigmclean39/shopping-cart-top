import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../images/hero2.png';

const Home = () => {
  return (
    <React.Fragment>
      <div className='main-page'>
        <div className='main-img-link-grid'>
          <Link className='shop-link' to='/shop'>
            Shop
          </Link>
          <div className='circle-bg'></div>
          <img className='hero-img' src={HeroImage} alt=''></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
