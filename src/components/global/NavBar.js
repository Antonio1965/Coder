import './NavBar.css';
import Carro from '../homes/Carro';

function Nav() {
    return (
        <header>
            <div className="container">
                <h1>TecnoAdult</h1>

                <nav>
                    <ul>
                        
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Celurares-Accesorios</a>
                        </li>
                        <li>
                            <a href="#">Tables-PC Escritorios</a>
                        </li>
                        <li>
                            <a href="#">Dispositivos Auxiliares</a>
                        </li>
                        <li>
                            <a href="#">Juegos Didacticos</a>
                        </li>
                        <li>
                            <a href="#">Otros</a>
                        </li>
                        <li>
                           <Carro/>
                        </li>
                    </ul>
                  
                </nav>
            </div>
        </header>
    )
}

export default Nav;

        
    

