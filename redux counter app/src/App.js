import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signin } from './actions';

function App() {
  const counter = useSelector((state) => state.counter)
  const isLogged = useSelector((state) => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="app">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment(5))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        {isLogged ? <h3> Valuable info you dont want to see </h3> : ""}
        <button onClick={() => dispatch(signin())}>{isLogged ? 'Log Out' : 'Login'}</button>
    </div>
  );
}

export default App;
