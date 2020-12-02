import logo1 from '../components/assets/logo.jpg';

function NavBar () {
    return (
        
        <div className='container'>
            <nav >
            <div className="img">
            <h1 className='tiulo'>TecnoAdult</h1>
			<img src={logo1} width='30%'alt='imagen de logo'/>
            </div>
            <div className="">
            <a href="#!" className="brand-logo">TecnoAdult</a>
            <a href="#!" className="brand-logo1">Categorias</a>
            <a href="#!" className="brand-logo2">Otros</a>
            </div>
            
        </nav>
        </div>
    
    )
}
export default NavBar;

        
    

