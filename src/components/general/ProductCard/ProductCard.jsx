import './ProductCard.css';
import {Link} from 'react-router-dom';

const ProductCard = ({id, titulo, precio, categoria, type='grid', img}) => {
    return (
        <article className={`productCard ${type}`}>
            <figure className='contenedor-imagen'>
            <img src={`/products/${img}`}  alt="Mi producto de prueba"/>
            </figure>
            <div>
                <h3>{titulo}</h3>
                <p>${precio}</p>
                <Link to={`/${categoria}/${id}`}>Ver detalle</Link>
            </div>
        </article>
    )
}

export default ProductCard;