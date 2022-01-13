import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';


const App = () => {
  const counter = useSelector(state => state.counter)
  const logged = useSelector(state => state.logged)

  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Counter {counter}</h1>
      <button onClick={ () => dispatch(increment(1))}> + </button>
      <button onClick={ ()=> dispatch(decrement())}> - </button>
      {logged ? <h1>Valueable Informaition</h1> : ''}
      
    </div>
  )
};

export default App;
