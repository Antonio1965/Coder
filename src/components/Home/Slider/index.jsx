import {memo} from 'react';
import Imagen3 from '../../assets/imagen3.jpg';
import Imagen4 from '../../assets/imagen4.jpg';
import Imagen5 from '../../assets/imagen5.jpg';
import Imagen6 from '../../assets/imagen6.jpg';


function Main () {
    return (
 <div className='container'>    
 <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Imagen4} className="d-block w-100" alt="imagen4"/>
    </div>
    <div className="carousel-item">
      <img src={Imagen5}  className="d-block w-100" alt="imagen5"/>
    </div>
    <div className="carousel-item">
      <img src={Imagen6} className="d-block w-100" alt="imagen6"/>
    </div>
    <div className="carousel-item">
      <img src={Imagen3} className="d-block w-100" alt="imagen3"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
            
    
    )
}
export default memo(Main);