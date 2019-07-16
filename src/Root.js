import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import App from './Components/App/App.jsx';
import { Provider } from 'react-redux';


const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Route path='/' component={App} />
        </Router>
    </Provider>
)

export default Root;