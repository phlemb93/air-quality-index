import React, { useState, createContext } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';


export const countContext = createContext();

function App() {

const [count, setCount] = useState(4);

const increment = () => {
  setCount( prevCount => prevCount + 10);
}
const decrement = () => {
  setCount( prevCount => prevCount - 10);
}

  return (
    <countContext.Provider value={{count, increment, decrement}}>
      <div className="App">
        <header className="header">
          <Navbar />
        </header>
        <main>
          <Home />
        </main>
      </div>
    </countContext.Provider>
  );
}

export default App;
