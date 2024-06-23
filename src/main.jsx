import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { counterReducer } from './pages/Counter/reducer.js'
import { Provider } from 'react-redux'
import { composeWithDevTools } from "@redux-devtools/extension";
import CounterPage from './pages/Counter/CounterPage.jsx'

const rootReduser = combineReducers({
  counter: counterReducer
});

const store = createStore(rootReduser, undefined,  composeWithDevTools())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterPage />
    </Provider>  
  </React.StrictMode>,
)
