import React from 'react';
import ReactDOM from 'react-dom';
import './css/HomeIndex.css';
import registerServiceWorker from './registerServiceWorker';
import HomeIndex from './component/home/HomeIndex' 
ReactDOM.render(<HomeIndex />, document.getElementById('root'));
registerServiceWorker();
