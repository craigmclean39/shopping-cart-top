import React, { useContext, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { useLocation } from 'react-router';
import { Product, Purchase } from '../types';
import { OrderContext, OrderContextType } from '../context/OrderContext';
import { arePurchasesEqual } from '../helpers';
import { Header } from '../components/Header';
import { ImageCarousel } from '../components/ImageCarousel';
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
  const { order, updateOrder } = useContext(OrderContext) as OrderContextType;
  const [color, setColor] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [detailIndex, setDetailIndex] = useState(0);

  const imageName = showDetails
    ? require(`../images/${product?.directory}/details/${product.detailImages[detailIndex]}`)
    : require(`../images/${product?.directory}/${product?.heroImages[color]}`);

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
        title={info.color}
        onClick={() => {
          setColor(info.index);
          setShowDetails(false);
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
      image:
        require(`../images/${product?.directory}/${product?.heroImages[color]}`)
          .default,
    };

    let orderCopy = Object.assign({}, order);

    let quantityUpdate = false;
    for (let i = 0; i < orderCopy.items.length; i++) {
      if (arePurchasesEqual(orderCopy.items[i], newPurchase)) {
        orderCopy.items[i].quantity = order.items[i].quantity + 1;
        updateOrder(orderCopy);
        quantityUpdate = true;
        break;
      }
    }
    if (!quantityUpdate) {
      orderCopy.items = order.items.concat(newPurchase);
      updateOrder(orderCopy);
    }
  };

  const displayDetails = (index: number, fromButton: boolean) => {
    if (showDetails === false && fromButton) {
      return;
    }
    setShowDetails(true);
    setDetailIndex(index);
  };

  const headerLinks: JSX.Element[] = [];
  headerLinks.push(
    <Link
      key={`shop${Math.random()}`}
      className='link breadcrumb-link'
      to='/shop'>
      Shop
    </Link>
  );
  headerLinks.push(
    <div key={product.directory} className='breadcrumb-link'>
      {product.name}
    </div>
  );

  return (
    <React.Fragment>
      <Header links={headerLinks} />
      <div className='product-details-wrapper'>
        <div className='product-details'>
          <h2 className='product-details--name'>{product.name}</h2>
          <p className='product-details--description'>
            {product.description.short}
          </p>
          <img
            className='product-details--hero'
            src={imageName.default}
            alt={product.name}></img>

          <div className='product-details--colors'>{colorPreviews}</div>
          <h5 className='product-details--price'>{`$${product.price}`}</h5>
          <ImageCarousel
            images={product.detailImages}
            directory={product.directory}
            displayDetails={displayDetails}
          />
          <p className='product-details--description-long'>
            {product.description.long}
          </p>

          <p className='product-details--activities'>
            Activities:{' |'}
            {product.activities.map((activity) => {
              return ` ${activity} |`;
            })}
          </p>
          <button className='product-details--add-button' onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
