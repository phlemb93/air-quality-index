import React, { useContext } from 'react';
import { countContext } from '../App';

function Home() {

  const { increment, decrement, count } = useContext(countContext);

  return (
    <div className="counter">
     
    <div>
      <h2>Counter { count }</h2>
    </div>
        

    <div>
      <div>
          <h2 onClick={() => increment()}>+</h2>
        </div>
        <div>
          <h2 onClick={() => decrement()}>-</h2>
        </div>
    </div>
      
    </div>
  )
}

export default Home