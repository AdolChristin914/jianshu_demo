/*
 * @Descripttion: actionCreator
 * @version: v1.0
 * @Author: yyp
 * @Date: 2020-04-22 13:06:57
 * @LastEditors: yyp
 * @LastEditTime: 2020-04-30 09:38:30
 */
import actionTypes from './actionTypes'

export const searchFocus = (focused) => ({
    type: actionTypes.SEARCH_FOCUS,
    payload: {
        focused: focused,
    },
})
