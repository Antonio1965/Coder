import './reset.css';

import  NavBar  from './components/global/NavBar';
import  Main  from './components/homes/Main';
import  Footer  from './components/global/Footer';
import ListProducts from './components/productos/ListProducts';

function App() {
  return (
    <>
    <div className="App">
    <NavBar/>
    <ListProducts/>
    <Footer/>
   
    </div>
    </>
  );
}

export default App;
