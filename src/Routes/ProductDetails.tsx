import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import { useLocation } from 'react-router';
import { Product, Purchase, Order } from '../types';
import { OrderContext } from '../context/OrderContext';

interface LocationState {
  state: {
    product: Product;
  };
}

const ProductDetails: React.FC<RouteComponentProps> = (props) => {
  const location = useLocation() as LocationState;
  const product = location.state.product;
  const order = useContext(OrderContext) as Order;

  const addToCart = () => {
    const newPurchase: Purchase = {
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    order.items.push(newPurchase);
  };

  console.log('Order');
  console.log(order);
  return (
    <React.Fragment>
      <div>Details</div>
      <button onClick={addToCart}>Add to Cart</button>
    </React.Fragment>
  );
};

export default ProductDetails;
