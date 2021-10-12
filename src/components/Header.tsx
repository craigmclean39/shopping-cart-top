import Logo from '../images/icons/logo.svg';
import ShoppingCart from '../images/icons/shopping_cart_black_24dp.svg';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

export const Header: React.FC = (props) => {
  const order = useContext(OrderContext);

  let quantity = 0;
  for (let i = 0; i < order.items.length; i++) {
    quantity += order.items[i].quantity;
  }

  return (
    <nav>
      <div className='header-left'>
        <Link to='/'>
          <img className='header-logo' alt='home' src={Logo}></img>
        </Link>
      </div>
      <div className='header-right'>
        <Link className='link' to='/cart'>
          {quantity}
          <img
            className='header-cart'
            alt='shopping cart'
            src={ShoppingCart}></img>
        </Link>
      </div>
    </nav>
  );
};
