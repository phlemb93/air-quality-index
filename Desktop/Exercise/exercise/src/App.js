import React, { useReducer, useEffect, createContext } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import axios from 'axios';



export const postsContext = createContext();

const initialState = {
  loading: true,
  data: [],
  error: ''
};

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'success':
      return {
        loading: false,
        data: action.payload,
        error: ''
      };

    case 'failed':
      return {
        loading: false,
        data: [],
        error: action.payload
      };

    default:
      return state;
  }
}

function App() {
  const [posts, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch(res.data))
    .catch(err => dispatch(err.message))
  }, [])

  return (
    <postsContext.Provider value={{posts, dispatch}}>
      <div className="App">
        <header className="header">
          <Navbar />
        </header>
        <main>
          <Home />
        </main>
      </div>
    </postsContext.Provider>
  );
}

export default App;
