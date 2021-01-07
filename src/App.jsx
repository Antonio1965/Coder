import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
//import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';
import Home from './components/Home';
import Category from './components/Category';
import Footer from './components/general/Nav/Footer';
import Detail from './components/Detail';
import Error404 from './components/Error404';
import Cart from './components/Cart';
import Checkout from './components/Checkout';



function App() {
 return (
    <>
    <Router>
      <NavAndWidgetCart />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/:category_name?'>
          <Category/>
        </Route>
        <Route path='/:category_name/:id'>
          <Detail/>
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path='*'>
          <Error404/>
        </Route>
      </Switch>
      <Footer pieDePagina='Copyright © 2020-2021 TecnoAdult S.R.L.'/>
    </Router>

    </>
  );
}
export default App;
