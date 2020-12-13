import './Nav.css';
import NavItem from '../NavItem/NavItem';
import NavCart from '../NavCart/NavCart';


function Nav({titulo, action}) {
    return (
        <nav>
            <div className="container">
                <h1>{titulo}</h1>

                <ul>
                    <NavItem text="Home" url="https://www.google.com" />
                    <NavItem text="Celulares-Accesorios" />
                    <NavItem text="Tables-PC Escritorios" />
                    <NavItem text="Dispositivos Auxiliares" />
                    <NavItem text="Juegos Didácticos" />
                    <NavItem text="Otros" />
                </ul>
                
                <NavCart action={action} />
            </div>
        </nav>
    )
}

export default Nav;