import {useState, useEffect} from 'react';
import ProductCard from '../../general/ProductCard/ProductCard';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
    const [items, setItems] = useState([]);
    // Hagan de cuenta que esta constante es una API
    const products = [
        {
            id: 1,
            titulo: 'Producto 1',
            precio: 1500,
        },
        {
            id: 2,
            titulo: 'Producto 2',
            precio: 3000,
        },
        {
            id: 3,
            titulo: 'Producto 3',
            precio: 6000,
        },
        {
            id: 4,
            titulo: 'Producto 4',
            precio: 2500,
        },
    ]

    const getProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })

    const getProducstFromDB = async () => {
        try {
            const result = await getProducts;
            setItems(result);
        } catch(error) {
            alert('No podemos mostrar los productos en este momento');
        }
    }

    useEffect(() => {
        getProducstFromDB();
    }, [])

    return (
        <section className="featuredProducts">
            <div className="container">
                {
                    items.length ?
                    <>
                        <h2>Productos destacados</h2>

                        <ul>
                            {
                                items.map((item, index) => (
                                    <li key={index}>
                                        <ProductCard 
                                            id={item.id}
                                            titulo={item.titulo} 
                                            precio={item.precio} 
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </> :
                    <p className="cargando">Cargando items...</p>
                }
            </div>
        </section>
    )
}

export default FeaturedProducts;