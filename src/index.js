import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import './styles.css';  //the equivalent of a link tag

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
