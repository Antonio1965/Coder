import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';

function Nav({titulo, action}) {
    const menuItems = [
        {
            texto: 'Home',
            ruta: '/category/home',
        },
        {
            texto: 'Celulares-Accesorios',
            ruta: '/category/celulares-accesorios',
        },
        {
            texto: 'Tables-PC Escritorios',
            ruta: '/category/tables-pc-escritorios',
        },
        {
            texto: 'Dispositivos Auxiliares',
            ruta: '/category/dispositivos-auxiliares',
        },
        {
            texto: 'Juegos Didácticos',
            ruta: '/category/juegos-didacticos',
        },
        {
            texto: 'Otros',
            ruta: '/category/otros',
        },
    ]

    const qty = 0;

    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <ul>
                    {
                     menuItems.map((seccion, index) => <NavItem key={index} text={seccion.texto} url={seccion.ruta}/>)   
                    }
                </ul>
                
                {
                    !qty && <NavCart action={action} qty={qty} />
                }
            </div>
        </nav>
    )
}

export default Nav;