/*
 * @Descripttion:reducer总入口文件
 * @version: v1.0
 * @Author: yyp
 * @Date: 2020-04-22 13:01:58
 * @LastEditors: yyp
 * @LastEditTime: 2020-04-30 09:37:43
 */

import { combineReducers } from 'redux'
import HeaderReducer from '@/components/Header/store/reducer'

export default combineReducers({
    headerReducer: HeaderReducer,
})
