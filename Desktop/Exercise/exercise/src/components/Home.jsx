import React, { useEffect, useReducer } from 'react';
import axios from 'axios';


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
        error: 'Sorry, unable to fetch posts'
      };

    default:
      return state;
  }
}

function Home() {

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then(res => dispatch({type: 'success', payload: res.data}))
    .catch(err => dispatch({type: 'failed'}))
  }, [])

  return (
    <div className="counter">
     <h2>Posts</h2>
    <div>
      { state.loading ? <h2>Loading...</h2> : (state.data.map(post => (
        <div key={post.id}>
          <h2>{ post.title }</h2>
          <p>{ post.body }</p>
        </div>
      ))) }

      { state.error ? state.error : null }
    </div>
      
    </div>
  )
}

export default Home