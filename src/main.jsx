import React from 'react'
import ReactDOM from 'react-dom/client'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'aos/dist/aos.css';
import App from './App'
import { ShopProvider } from './context/ShopContext'
import './assets/scss/style.scss';
// import { Provider } from 'react-redux'
// import configureStore from './tools/store/configureStore';
// // import { Provider } from 'react-redux'
// import shopStore from './tools/store/shopStore'


// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

// const store = shopStore();

// const store = configureStore();

// const result = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopProvider>
      <App />
    </ShopProvider>
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}><App /></Provider>
//   </React.StrictMode>
// )
