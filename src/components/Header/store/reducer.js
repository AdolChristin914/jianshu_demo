/*
 * @Descripttion:header组件的reducer
 * @version: v1.0
 * @Author: yyp
 * @Date: 2020-04-22 13:07:12
 * @LastEditors: yyp
 * @LastEditTime: 2020-04-30 11:14:54
 */

import actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const initialState = fromJS({
    focus: false,
})

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focus', payload.focused)
        default:
            return state
    }
}
