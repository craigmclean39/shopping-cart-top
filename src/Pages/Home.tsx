import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../images/hero2.png';
import { ReactComponent as Logo } from '../images/icons/logo.svg';

const Home = () => {
  return (
    <React.Fragment>
      <div className='main-page'>
        <Logo fill='white' className='logo-img' />
        <div className='main-img-link-grid'>
          <Link className='shop-link' to='/shop'>
            SHOP
          </Link>
          <img className='hero-img' src={HeroImage} alt=''></img>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
