import './reset.css';

import  NavBar  from './components/global/NavBar';
//import  Main  from './components/homes/Main';
import  Footer  from './components/global/Footer';
import ListProduct from './components/productos/ListProduct';;

function App() {
  return (
    <>
    <div className="App">
    <NavBar/>
    <ListProduct titulo='Producto 1' descripcion='Celulares X' precio='3000'/>
    <ListProduct titulo='Producto 2' descripcion='Celulares Y' precio='4000'/>
    <ListProduct titulo='Producto 3' descripcion='Celulares Z' precio='5000'/> 
   
    <Footer pieDePagina='Copyright © 2020-2021 TecnoAdult S.R.L.'/>
   
    </div>
    </>
  );
}

export default App;
