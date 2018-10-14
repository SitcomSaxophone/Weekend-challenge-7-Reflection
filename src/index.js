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
            return [...action.payload];
        default:
            return state;
    }
}

const newFeedback = (state = {}, action) => {
    switch (action.type) {
        case 'SET_FEELINGS':
            return{...state, feeling: action.payload};
        case 'SET_UNDERSTANDING':
            return {...state, understanding: action.payload};
        case 'SET_SUPPORT':
            return {...state, support: action.payload};
        case 'SET_COMMENTS':
            return {...state, comments: action.payload};
        default: 
            return state;
    }
}

const allReducers = combineReducers({
    feedback,
    newFeedback,
})

const store = createStore(
    allReducers,
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
