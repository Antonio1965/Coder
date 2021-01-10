import {useSelector} from 'react-redux';

const Cart = () => {
    const items = useSelector (state => state.items);
    
    return (
        <>
        <h1 className='container'>Estás en el cart</h1>
        {
            items.map(item => (
                <>
                    <h2>{item.item.title}</h2>
                    <p>{item.cantidad}</p>
                    <p>{item.item.price}</p>
                    <button className='btn-danger'>Eliminar</button>
                </>
            ))
        }
        </>
    )
}

export default Cart;