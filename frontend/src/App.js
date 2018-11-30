import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router from "./router"
import authReducer from "./store/authReducer"
import { Provider } from 'react-redux'
import {createStore} from 'redux';
import './App.css';

const store = createStore(authReducer)

class App extends Component {
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
