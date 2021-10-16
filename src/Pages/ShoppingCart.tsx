import React, { useContext } from 'react';
import { OrderContext, OrderContextType } from '../context/OrderContext';
import { Header } from '../components/Header';
import { CartItem } from '../components/CartItem';
import { CartItemProps } from '../types';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { order, updateOrder } = useContext(OrderContext) as OrderContextType;

  const handleQuantityUpdate = (
    increment: boolean,
    itemName: string,
    colorIndex: number
  ) => {
    let orderCopy = Object.assign({}, order);

    for (let i = 0; i < orderCopy.items.length; i++) {
      if (
        orderCopy.items[i].name === itemName &&
        orderCopy.items[i].colorIndex === colorIndex
      ) {
        if (increment) {
          orderCopy.items[i].quantity = order.items[i].quantity + 1;
        } else if (orderCopy.items[i].quantity > 1) {
          orderCopy.items[i].quantity = order.items[i].quantity - 1;
        } else {
          orderCopy.items.splice(i, 1);
        }

        updateOrder(orderCopy);
        break;
      }
    }
  };

  const items = order.items.map((item) => {
    const sProps: CartItemProps = {
      item: item,
      handleQuantityUpdate: handleQuantityUpdate,
    };
    return <CartItem key={item.name + item.colorIndex} {...sProps} />;
  });

  const orderTotal = order.items.reduce((prev, current) => {
    return prev + current.price * current.quantity;
  }, 0);

  const headerLinks: JSX.Element[] = [];
  headerLinks.push(
    <Link className='link breadcrumb-link' to='/shop'>
      Shop
    </Link>
  );
  headerLinks.push(<div className='breadcrumb-link'>Shopping Cart</div>);

  return (
    <React.Fragment>
      <Header links={headerLinks} />
      <div className='shop-wrapper'>
        <div className='shop-container'>
          <div className='shopping-cart--title'>
            {items.length > 0 ? 'Cart' : 'Your shopping cart is empty'}
          </div>
          <div>{items}</div>
          {items.length > 0 ? (
            <div className='shopping-cart-order-total'>
              <div className='shopping-cart--title'>Total</div>
              <div className='shopping-cart--total-price'>{`$ ${orderTotal}`}</div>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ShoppingCart;
