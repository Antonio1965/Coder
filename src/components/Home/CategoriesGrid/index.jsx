import './CategoriesGrid.css';
import {Link} from 'react-router-dom';

const CategoriesGrid = () => {
    return (
        <section className="categories_grid">
            <div className="container">
                <div className="item">
                    <Link to="">
                        Home  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Celulares y accesorios  
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Tables-Pc Escritorios 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Dispositivos auxiliares 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Juegos Didacticos 
                    </Link>
                </div>
                <div className="item">
                    <Link to="">
                        Otros
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CategoriesGrid;