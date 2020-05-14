import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {increment,decrement} from './actions'


function App() {
  const counter =useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(8))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
      
      {isLogged ? <h3> INFO I SHOULD NOT SEE IF LOGGED IN </h3> : 'Nothing Showed Up'}
      
    </div>
  );
}

export default App;
