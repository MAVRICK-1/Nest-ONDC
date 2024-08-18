import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { HashRouter } from 'react-router-dom';  // Import HashRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>  {/* Wrap App with HashRouter */}
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
