import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store'
import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <hr/>
    <header className='Title'>HabiTest</header>
    <hr/>
    <App />
   </Provider>
  </React.StrictMode>
);

