/*
 * @Descripttion: app入口js
 * @version: v1.0
 * @Author: yyp
 * @Date: 2020-04-16 17:08:32
 * @LastEditors: yyp
 * @LastEditTime: 2020-04-30 10:42:43
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducers from '@/store/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
