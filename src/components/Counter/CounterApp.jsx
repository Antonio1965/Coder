import React, { useState } from "react";
import CountContainer from "./CounterContainer";
import './Counter.css';


export default function App() {
  const [count, setCount] = useState(0);
  const qty = 7;

  const add = () => {
    if (count < qty) {
      setCount(count + 1);
    }
    if (count === qty) {
      alert("Solo tengo eso en stock");
    }
  };

  const less = () => {
    if (count === 0) {
      alert("No se puede menos de 0");
      return;
    }

    setCount(count - 1);
  };
  return (
    <div className='counter'>
      <CountContainer count={count} add={add} less={less} />
    </div>
  );
}