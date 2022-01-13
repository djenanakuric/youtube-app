import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';  //store - global
//import * as serviceWorker from './serviceWorker';

import allReducers from './reducers/index';
import { Provider } from 'react-redux';
/*
// store -> globalizes state

//action -> opis sta zelimo, funkcija koja vraca objekat, to je ovo increment i decrement
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
const counter = (state = 0, action) => {
  switch (action.type) {
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

const myStore = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store = {myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

