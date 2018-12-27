import React from 'react'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from 'reducers'

const enhancedComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, enhancedComposer(applyMiddleware()))

export default (props) => (
    <Provider store={store}>
        {props.children}
    </Provider>
)