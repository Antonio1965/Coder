import React from "react";
import './ListProduct.css';


function ListProduct ({titulo, descripcion, precio}) {
  return (
  <articule className='list-product '>
    <img src='https://placehold.it/150x250'alt='Mi producto de prueba'/>
    <h3>{titulo}</h3>
    <h4>{descripcion}</h4>
    <p>{precio}</p>
  </articule>
  );
}
export default ListProduct;