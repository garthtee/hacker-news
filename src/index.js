import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {isDev} from '../environment';

ReactDOM.render(<App />, document.getElementById('root'));

// Registering service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./serviceWorker.js');
}
