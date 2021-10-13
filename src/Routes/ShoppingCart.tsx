import React, { useContext } from 'react';
import { OrderContext, OrderContextType } from '../context/OrderContext';

const ShoppingCart = () => {
  const { order } = useContext(OrderContext) as OrderContextType;

  const items = order.items.map((item) => {
    return (
      <div
        key={
          item.name + item.colorName
        }>{`${item.name} ${item.colorName} Quantity: ${item.quantity}`}</div>
    );
  });

  return (
    <React.Fragment>
      <div>Cart</div>
      <div>{items}</div>
    </React.Fragment>
  );
};

export default ShoppingCart;
