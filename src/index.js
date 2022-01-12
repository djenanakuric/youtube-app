import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';  //store - global
import * as serviceWorker from './serviceWorker';

/*
// store -> globalizes state

//action -> opis sta zelimo, funkcija koja vraca objekat
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}


//reducer -> provjerava akciju i modificira store, kad se uradi dipatch onda on provjeri stanje
const counter = (state = 0, actrion) => {
  switch (actrion.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter)
// Displey in console

store.subscribe(() => console.log(store.getState()));

// dispatch -> izvrsavanje akcije
store.dispatch(increment());

*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

