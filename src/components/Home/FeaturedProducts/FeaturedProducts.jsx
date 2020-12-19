import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    return (
        <section className="featuredProducts">
            <div className="container">
                <h2>Productos destacados</h2>

                <ul>
                    <li><ProductCard titulo="Producto 1" precio="1500" /></li>
                    <li><ProductCard titulo="Producto 2" precio="3000" /></li>
                    <li><ProductCard titulo="Producto 3" precio="2650" /></li>
                    <li><ProductCard titulo="Producto 4" precio="2100" /></li>
                </ul>
            </div>
        </section>
    )
}

export default FeaturedProducts;