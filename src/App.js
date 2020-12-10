import './reset.css';

import  NavBar  from './components/global/NavBar';
import  Main  from './components/homes/Main';
import  Footer  from './components/global/Footer';
import ListProducts from '../src/components/productos/ListProducts';;

function App() {
  return (
    <>
    <div className="App">
    <NavBar/>
    <ListProducts tipo='Tipo de Producto'
    lista=
    {[
      'imagen1',
      'imagen2',
      'imagen3',
      'imagen4',
      'imagen5',
      'imagen6',
      'imagen7',
      
    ]}
    />
    <Footer/>
   
    </div>
    </>
  );
}

export default App;
