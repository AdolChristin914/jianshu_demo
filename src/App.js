/*
 * @Descripttion: App主组件
 * @version: v1.0
 * @Author: yyp
 * @Date: 2020-04-16 17:08:32
 * @LastEditors: yyp
 * @LastEditTime: 2020-04-30 09:38:06
 */
import React, { Fragment } from 'react'
import Header from '@/components/Header'
import GlobalStyle from '~/styles/index'

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle.Normalize></GlobalStyle.Normalize>
                <GlobalStyle.CustomStyle></GlobalStyle.CustomStyle>
                <GlobalStyle.IconFontStyle></GlobalStyle.IconFontStyle>
                <Header></Header>
            </Fragment>
        )
    }
}

export default App
