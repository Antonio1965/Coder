import './ListProducts.css';

import Celu1 from '../assets/celu1.jpg';
import Celu2 from '../assets/celu2.jpg';
import Celu3 from '../assets/celu3.jpg';

const ListProducts = () => {
    return ( 
        <div className='container'>
        <div className='container-product'>
            <div className="row-product">
                <div className="col-6 col-md-4 product" >
                    <h3>Titulo de producto</h3>
                    <img src={Celu1} alt='celu1'/>
                    <p>Detalles del productos</p>
                    <button className='boton'>Comprar</button>
                </div>

                <div className="col-6 col-md-4 product" >
                    <h3>Titulo de producto</h3>
                    <img src={Celu2} alt='celu2'/>
                    <p>Detalles del productos</p>
                    <button className='boton'>Comprar</button>
                </div>
                <div className="col-6 col-md-4 product">
                    <h3>Titulo de producto</h3>
                    <img src={Celu3} alt='celu3'/>
                    <p>Detalles del productos</p>
                    <button className='boton'>Comprar</button>
                </div>
                     
             </div>

        </div>
        </div>
     );
}
 
export default ListProducts;