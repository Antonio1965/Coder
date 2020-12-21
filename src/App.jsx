
import './reset.css';
import NavAndWidgetCart from './components/general/NavAndWidgetCart/NavAndWidgetCart';
import FeaturedProducts from './components/Home/FeaturedProducts/FeaturedProducts';
import Home from './components/Home';
import Category from './components/Category';
import Footer from './components/general/Nav/Footer';
import Main from './components/Home/Main';
import Detail from './components/Detail';



function App() {
  const sectionToShow = (section) => {
    switch(section) {
      case 'Home': return <Home/>;
      case 'Category': return <Category/>;
      case 'FeaturedProducts': return <FeaturedProducts/>
      case 'Main': return <Main/>
      case 'Detail': return <Detail/>;
      default: return <Home/>
    }
  }

  return (
    <>
      <NavAndWidgetCart />
      {sectionToShow('Detail')}
      <Footer pieDePagina='Copyright © 2020-2021 TecnoAdult S.R.L.'/>

    </>
  );
}
export default App;
