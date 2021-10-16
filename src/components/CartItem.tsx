import React from 'react';
import { CartItemProps } from '../types';

export const CartItem: React.FC<CartItemProps> = ({
  item,
  handleQuantityUpdate,
}) => {
  return (
    <React.Fragment>
      <div className='cart-item'>
        <div className='cart-item--thumbnail'>
          <img
            className='cart-item--image'
            src={item.image}
            alt={item.name}></img>
          <div className='cart-item--details-wrapper'>
            <h6 className='cart-item--details cart-item--name'>{`${item.name}`}</h6>
            <h6 className='cart-item--details'>{`${item.colorName}`}</h6>
          </div>
        </div>
        <div className='cart-item--thumbnail'>
          <button
            className='cart-item--button'
            onClick={() =>
              handleQuantityUpdate(false, item.name, item.colorIndex)
            }>
            -
          </button>
          <div className='cart-item--number-field'>{item.quantity}</div>
          <button
            className='cart-item--button'
            onClick={() =>
              handleQuantityUpdate(true, item.name, item.colorIndex)
            }>
            +
          </button>
        </div>
        <div className='cart-item--details cart-item--price'>{`$ ${
          item.quantity * item.price
        }`}</div>
      </div>
    </React.Fragment>
  );
};
