import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import Shop from './Pages/Shop';
import ShoppingCart from './Pages/ShoppingCart';
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
