
import React from 'react';
import {Provider} from 'react-redux';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import AuthReducers from './src/Pages/Reducers/authReducers';
import FirstNavGroup from './src/Navigators/Navigation'

const rootReducer = combineReducers({
 auth:AuthReducers
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk))


export default function App (){
    return(
        <Provider store={store}>
            <FirstNavGroup />


        </Provider>
    )

}

