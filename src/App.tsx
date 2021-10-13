import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import ProductDetails from './Routes/ProductDetails';
import Shop from './Routes/Shop';
import ShoppingCart from './Routes/ShoppingCart';
import { OrderContext, OrderContextType } from './context/OrderContext';
import { useState } from 'react';
import { Order } from './types';

function App() {
  const [order, setOrder] = useState<Order>({ items: [] });

  const updateOrder = (newOrder: Order) => {
    setOrder(newOrder);
  };

  let orderContextValue: OrderContextType = {
    order: order,
    updateOrder: updateOrder,
  };

  return (
    <OrderContext.Provider value={orderContextValue}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/shop' component={Shop}></Route>
          <Route path='/shop/:id' component={ProductDetails}></Route>
          <Route path='/cart' component={ShoppingCart}></Route>
        </Switch>
      </BrowserRouter>
    </OrderContext.Provider>
  );
}

export default App;
