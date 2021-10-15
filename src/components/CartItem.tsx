import React from 'react';
import { CartItemProps } from '../types';

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <React.Fragment>
      <div className='cart-item'>
        <img
          className='cart-item--image'
          src={item.image}
          alt={item.name}></img>
        <div className='cart-item--details-wrapper'>
          <h6 className='cart-item--details'>{`${item.name} | ${item.colorName}`}</h6>
          <h6 className='cart-item--details'>{`Quantity: ${
            item.quantity
          } , Price: $ ${item.price * item.quantity}`}</h6>
        </div>
      </div>
    </React.Fragment>
  );
};
