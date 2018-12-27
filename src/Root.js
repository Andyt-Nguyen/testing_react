import React from 'react'
import { Provider } from 'react-redux'
import reduxPromise from 'redux-promise'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from 'reducers'

const enhancedComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default ({children, initialState={}}) => {
    const store = createStore (
        reducers, initialState, 
        enhancedComposer(applyMiddleware(reduxPromise))
    )
    return (
    <Provider store={store}>
        {children}
    </Provider>
)}