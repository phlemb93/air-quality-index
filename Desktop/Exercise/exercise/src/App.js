import React, { useReducer, createContext } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';


export const countContext = createContext();

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - 1;

    default:
      return state;
  }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <countContext.Provider value={{count, dispatch}}>
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
