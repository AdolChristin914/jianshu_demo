/*
 * @Descripttion: 自定义全局css
 * @version: v1.0
 * @Author: yyp
 * @Date: 2020-04-17 16:40:17
 * @LastEditors: yyp
 * @LastEditTime: 2020-04-21 16:06:30
 */

import { createGlobalStyle } from 'styled-components'

export const CustomStyle = createGlobalStyle`
ul,li {
    padding:0;
    margin:0;
}

li {
    list-style:none;
}

a {
    text-decoration:none;
}

.clearfix {
    :after{
        visibility: hidden;
        display: block;
        font-size: 0;
        content: " ";
        clear: both;
        height: 0;
    }
}

.float-left{
    float:left;
}

.float-right{
    float:right;
}
`
