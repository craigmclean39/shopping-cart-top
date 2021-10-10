import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import ProductDetails from './Routes/ProductDetails';
import Shop from './Routes/Shop';
import ShoppingCart from './Routes/ShoppingCart';
import { OrderContext, userOrder } from './context/OrderContext';

function App() {
  return (
    <OrderContext.Provider value={userOrder}>
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
