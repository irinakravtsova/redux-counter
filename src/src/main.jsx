import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from "@redux-devtools/extension";
import {thunk} from 'redux-thunk';
import CounterPage from './pages/Counter/CounterPage.jsx';
import { counterReducer } from './pages/Counter/reducer.js'

import './api/mock-server.js';

const rootReduser = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReduser, undefined,  composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>  
  </React.StrictMode>,
)
