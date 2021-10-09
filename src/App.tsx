import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/shop' component={Shop}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
