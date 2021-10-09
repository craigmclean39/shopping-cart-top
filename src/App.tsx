import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Shop from './components/Shop';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/shop' component={Shop}></Route>
        <Route path='/shop/:id' component={ProductDetails}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
