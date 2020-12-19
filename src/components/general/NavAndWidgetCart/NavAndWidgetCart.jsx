import {useState} from 'react';
import Nav from '../Nav/Nav';
import WidgetCart from '../WidgetCard/WidgetCart';


const NavAndWidgetCart = () => {
    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <>
            <Nav titulo="TecnoAdult" action={openWidgetCart} />
            <WidgetCart show={showWidgetCart} action={openWidgetCart}/>
           
        </>
    )
}

export default NavAndWidgetCart;