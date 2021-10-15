import React, { useContext } from 'react';
import { OrderContext, OrderContextType } from '../context/OrderContext';
import { Header } from '../components/Header';
import { CartItem } from '../components/CartItem';
import { CartItemProps } from '../types';

const ShoppingCart = () => {
  const { order } = useContext(OrderContext) as OrderContextType;

  const items = order.items.map((item) => {
    const sProps: CartItemProps = {
      item: item,
    };
    return <CartItem key={item.name + item.colorIndex} {...sProps} />;
  });

  return (
    <React.Fragment>
      <Header />
      <div className='shop-wrapper'>
        <div className='shop-container'>
          <div className='shopping-cart--title'>
            {items.length > 0 ? 'Cart' : 'Your shopping cart is empty'}
          </div>
          <div>{items}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
