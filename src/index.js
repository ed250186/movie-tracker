import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import Root from './Root.js';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';


const store = createStore(rootReducer, composeWithDevTools());

export const root = (<Root store={store} />)

ReactDOM.render(root, document.getElementById('root'));

serviceWorker.unregister();
