import { useParams } from 'react-router-dom';


const Category = () => {
    const {category_name} = useParams();

    const queCategoriaEs = (cat) => {
        switch(cat) {
            case 'home': return <h2 className="container">Estoy en home</h2>;
            case 'celulares-accesorios': return <h2 className="container">Estoy en Celulares-accesorios</h2>;
            case 'tables-pc-escritorios': return <h2 className="container">Estoy en tables-pc-escritorios</h2>;
            case 'dispositivos-auxiliares': return <h2 className="container">Estoy en dispositivos auxiliares</h2>;
            case 'juegos-didacticos': return <h2 className="container">Estoy en juegos didacticos</h2>;
            case 'otros': return <h2 className="container">Estoy en otros</h2>
            default: return <h2 className="container"> la categoría no existe</h2>
        }
    }

    return (
        <>
            {
               queCategoriaEs(category_name) 
            }
        </>
    )
}

export default Category;