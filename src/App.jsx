import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
//import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';
import Home from './components/Home';
import Category from './components/Category';
import Footer from './components/general/Nav/Footer';
//import Main from './components/Home/Main';
import Detail from './components/Detail';
import Error404 from './components/Error404';



function App() {
 return (
    <>
    <Router>
      <NavAndWidgetCart />
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/category/:category_name?'>
          <Category/>
        </Route>
        <Route path='/detail/:id'>
          <Detail/>
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
