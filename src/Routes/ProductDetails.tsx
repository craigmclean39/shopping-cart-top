import React, { useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useLocation } from 'react-router';
import { Product, Purchase, Order } from '../types';
import { OrderContext } from '../context/OrderContext';
import { Link } from 'react-router-dom';

interface LocationState {
  state: {
    product: Product;
  };
}

interface ColorInfo {
  image: string;
  color: string;
  index: number;
}

const ProductDetails: React.FC<RouteComponentProps> = (props) => {
  const location = useLocation() as LocationState;
  const product = location.state.product;
  const order = useContext(OrderContext) as Order;

  const [color, setColor] = useState(0);

  const imageName = require(`../images/${product?.directory}/${product?.heroImages[color]}`);

  let colorDetails: ColorInfo[] = [];
  for (let i = 0; i < product.colors.length; i++) {
    const colorInfo: ColorInfo = {
      image:
        require(`../images/${product?.directory}/${product?.heroImages[i]}`)
          .default,
      color: product.colors[i],
      index: i,
    };

    colorDetails.push(colorInfo);
  }

  const colorPreviews = colorDetails.map((info) => {
    return (
      <img
        className='product-details--color-preview'
        key={info.color}
        src={info.image}
        alt={info.color}
        onClick={() => {
          setColor(info.index);
        }}></img>
    );
  });

  const addToCart = () => {
    const newPurchase: Purchase = {
      name: product.name,
      price: product.price,
      quantity: 1,
      colorIndex: color,
      colorName: product.colors[color],
    };

    if (order.items.includes(newPurchase)) {
    } else {
      order.items.push(newPurchase);
    }
  };

  console.log('Order');
  console.log(order);
  return (
    <React.Fragment>
      <div className='product-details'>
        <h2 className='product-details--name'>{product.name}</h2>
        <p className='product-details--description'>
          {product.description.short}
        </p>
        <img src={imageName.default} alt={product.name}></img>
        <div className='product-details--colors'>{colorPreviews}</div>
        <button onClick={addToCart}>Add to Cart</button>
        <Link to='/cart'>Goto Shopping Cart</Link>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
