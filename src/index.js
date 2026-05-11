import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Auto-reload on stale chunk errors after deploy
window.addEventListener('error', (e) => {
  if (e.message?.includes('ChunkLoadError') || e.message?.includes('Loading chunk')) {
    window.location.reload();
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
