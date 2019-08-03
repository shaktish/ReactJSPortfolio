import React from 'react';
import App from './App';



// REDUX
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// Root Reducer
import RootReducer from  './Redux/Reducers/RootReducer';
const store = createStore(RootReducer,applyMiddleware(thunk))


const EvensOrOdds = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}



export default EvensOrOdds;