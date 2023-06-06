import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import contactReducer from './redux/reducers/contactReducer.js'
import { composeWithDevTools } from 'redux-devtools-extension'

// Redux Store
const store = configureStore({
  reducer: contactReducer, 
  composeWithDevTools
})

// Providing Redux Store to react by putting
// <Provider> around our application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  </React.StrictMode>,
)
