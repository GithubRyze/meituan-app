import React from 'react';
import ReactDOM from 'react-dom';
import './css/RegisterIndex.css'
import registerServiceWorker from './registerServiceWorker';
import HomeIndex from './component/home/HomeIndex';
import RigisterIndex from './component/register/RegisterIndex';
ReactDOM.render(<RigisterIndex />, document.getElementById('root'));
registerServiceWorker();
