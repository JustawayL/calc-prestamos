import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'purecss/build/pure.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
