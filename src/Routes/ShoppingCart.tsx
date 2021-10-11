import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';

const ShoppingCart = () => {
  const order = useContext(OrderContext);

  const items = order.items.map((item) => {
    return <div>{`${item.name} ${item.colorName}`}</div>;
  });

  return (
    <React.Fragment>
      <div>Cart</div>
      <div>{items}</div>
    </React.Fragment>
  );
};

export default ShoppingCart;
