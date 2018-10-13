import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const feedback = (state = [], action) => {
    switch (action.type) {
        case 'GET_FEEDBACK':
            return [...state, ...action.payload];
        default:
            return state;
    }
}

const allReducers = combineReducers({
    feedback,
})

const store = createStore(
    allReducers,
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
