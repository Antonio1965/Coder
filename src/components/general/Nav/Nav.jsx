import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';
import {Link} from 'react-router-dom';

function Nav({titulo, action}) {
    const menuItems = [
        
        {
            texto: 'Celulares-Accesorios',
            ruta: '/celulares-accesorios',
        },
        {
            texto: 'Tables-PC Escritorios',
            ruta: '/tables-pc-escritorios',
        },
        {
            texto: 'Dispositivos Auxiliares',
            ruta: '/dispositivos-auxiliares',
        },
        {
            texto: 'Juegos Didácticos',
            ruta: '/juegos-didacticos',
        },
        
    ]

    const qty = 1;

    return (
        <nav>
            <div className="container">
                <h1><Link to="/">{titulo}</Link></h1>

                <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta}/>)   
                    }
                </ul>
                
                {
                    !!qty && <NavCart action={action} qty={qty} />
                }
            </div>
        </nav>
    )
}

export default Nav;