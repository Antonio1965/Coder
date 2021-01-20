import { useState } from 'react';
import './reset.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';
import Error404 from './components/general/Error404';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/general/Nav/Footer';
import {Store} from './store';

function App() {
  const [data, setData] = useState({
    items: [],
    cantidad: 0,
    precioTotal: 0,
  })

  return (
    <Store.Provider value={[data, setData]}>
      <Router>
      <NavAndWidgetCart />

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route exact path='/:category_name?'>
          <Category/>
        </Route>
        <Route exact path='/:category_name/:id'>
          <Detail/>
        </Route>
        <Route path='*'>
          <Error404/>
        </Route>
      </Switch>

      <Footer pieDePagina='Copyright © 2020-2021 TecnoAdult S.R.L.'/>
      </Router>
      </Store.Provider>
    
  );
}
export default App ;