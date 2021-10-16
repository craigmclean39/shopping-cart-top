import Logo from '../images/icons/logo.svg';
import ShoppingCart from '../images/icons/shopping_cart_black_24dp.svg';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { OrderContext, OrderContextType } from '../context/OrderContext';
import { Breadcrumbs } from './Breadcrumbs';
import { HeaderProps } from '../types';

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const { order } = useContext(OrderContext) as OrderContextType;

  let quantity = 0;
  for (let i = 0; i < order.items.length; i++) {
    quantity += order.items[i].quantity;
  }

  return (
    <nav>
      <div className='header'>
        <div className='header-left'>
          <Link to='/'>
            <img className='header-logo' alt='home' src={Logo}></img>
          </Link>
        </div>
        <div className='header-right'>
          <Link className='link' to='/cart'>
            <div className='header--quantity'>{quantity}</div>
            <img
              className='header-cart'
              alt='shopping cart'
              src={ShoppingCart}></img>
          </Link>
        </div>
      </div>
      <Breadcrumbs links={links} />
    </nav>
  );
};
