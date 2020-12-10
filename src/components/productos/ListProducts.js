import React from "react";
import './ListProducts.css';


function ListProducts (props) {
  return (
    <div className='list-container'>
      <h2> {props.tipo}</h2>
      <ul>
        {props.lista.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}
export default ListProducts;