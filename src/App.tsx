import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Routes/Home';
import ProductDetails from './Routes/ProductDetails';
import Shop from './Routes/Shop';
import { OrderContext, userOrder } from './context/OrderContext';

function App() {
  return (
    <OrderContext.Provider value={userOrder}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/shop' component={Shop}></Route>
          <Route path='/shop/:id' component={ProductDetails}></Route>
        </Switch>
      </BrowserRouter>
    </OrderContext.Provider>
  );
}

export default App;
