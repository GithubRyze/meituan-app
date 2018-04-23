import React from 'react';
import ReactDOM from 'react-dom';
import './HomeIndex.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import HomeIndex from './component/home/Index' 
ReactDOM.render(<HomeIndex />, document.getElementById('root'));
registerServiceWorker();
