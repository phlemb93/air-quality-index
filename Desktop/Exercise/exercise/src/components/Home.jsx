import React, { useContext } from 'react';
import { countContext } from '../App';

function Home() {

  const { dispatch, count } = useContext(countContext);

  return (
    <div className="counter">
     
    <div>
      <h2>Counter { count }</h2>
    </div>
        

    <div>
      <div>
          <h2 onClick={() => dispatch({type: 'increment', payload: 2})}>+</h2>
        </div>
        <div>
          <h2 onClick={() => dispatch({type: 'decrement'})}>-</h2>
        </div>
    </div>
      
    </div>
  )
}

export default Home