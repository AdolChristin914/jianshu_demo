/*
 * @Descripttion:Header组件
 * @version: v1.0
 * @Author: yyp
 * @Date: 2020-04-21 13:43:19
 * @LastEditors: yyp
 * @LastEditTime: 2020-04-30 11:14:09
 */

import React from 'react'
import styled from 'styled-components'
import logoSrc from '~/images/logo.png'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './store/actions'

class Header extends React.Component {
    onInputFocus() {
        this.props.dispatch.searchFocus(true)
    }
    onInputBlur() {
        this.props.dispatch.searchFocus(false)
    }
    render() {
        console.log(this.props)
        return (
            <Nav>
                <MainWrapper>
                    <Logo src={logoSrc}></Logo>
                    <RightWrapper>
                        <ul>
                            <li>
                                <Button href="/">
                                    <i className="icon-quill"></i>
                                    <span>写文章</span>
                                </Button>
                            </li>
                            <li>
                                <PlainButton href="/">
                                    <span>注册</span>
                                </PlainButton>
                            </li>
                            <li>
                                <ALink href="/">登录</ALink>
                            </li>
                            <li>
                                <Aa href="/">
                                    <i className="icon-Aa"></i>
                                </Aa>
                            </li>
                        </ul>
                    </RightWrapper>
                    <CenterWrapper>
                        <ul>
                            <LinkLi>
                                <LeftAItem href="/" active>
                                    <i className="icon-compass"></i>
                                    <span>首页</span>
                                </LeftAItem>
                            </LinkLi>
                            <LinkLi>
                                <LeftAItem href="/">
                                    <i className="icon-ledec-shoujixiazai"></i>
                                    <span>下载App</span>
                                </LeftAItem>
                            </LinkLi>
                            <li className="sousuo">
                                <CSSTransition
                                    in={this.props.focus}
                                    timeout={300}
                                    classNames="slider"
                                >
                                    <SearchInput
                                        className={
                                            this.props.focus
                                                ? 'input-search__focus'
                                                : ''
                                        }
                                        onFocus={this.onInputFocus.bind(this)}
                                        onBlur={this.onInputBlur.bind(this)}
                                    />
                                </CSSTransition>
                                <SearchIconWrapper
                                    className={
                                        this.props.focus
                                            ? 'search-icon-wrapper__focus'
                                            : ''
                                    }
                                >
                                    <SearchIcon className="icon-sousuo"></SearchIcon>
                                </SearchIconWrapper>
                            </li>
                        </ul>
                    </CenterWrapper>
                </MainWrapper>
            </Nav>
        )
    }
}

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 58px;
    background-color: #fff;
    border-bottom: 1px solid #f0f0f0;
    z-index: 1030;
`

const MainWrapper = styled.div`
    min-width: 768px;
    max-width: 1440px;
    height: 58px;
    margin: 0 auto;
`

const Logo = styled.img`
    float: left;
    width: 100px;
    height: 58px;
`

const CenterWrapper = styled.div`
    width: 960px;
    height: 58px;
    margin: 0 auto;

    li {
        float: left;
        padding: 0 20px;
        line-height: 58px;
    }

    .sousuo {
        position: relative;
    }
`

const LeftAItem = styled.a`
    i {
        font-size: 20px;
        margin-right: 2px;
    }

    color: ${(props) => (props.active ? '#ea6f5a' : '')};
`

const LinkLi = styled.li`
    :hover {
        background-color: #f5f5f5;
    }
`

const SearchInput = styled.input.attrs({
    placeholder: '搜索',
})`
    padding: 0 40px 0 20px;
    width: 240px;
    height: 38px;
    outline: none;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;

    &.input-search__focus {
        width: 320px;
    }

    &.slider-enter {
        transition: all 0.3s ease-out;
    }

    &.slider-enter-active {
        width: 320px;
    }

    &.slider-exit {
        transition: all 0.3s ease-out;
    }

    &.slider-exit-active {
        width: 240px;
    }
`

const SearchIconWrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 22px;
    transform: translateY(-50%);
    height: 32px;
    width: 32px;
    line-height: 32px;
    text-align: center;

    &.search-icon-wrapper__focus {
        border-radius: 50%;
        background-color: #969696;

        .icon-sousuo {
            color: #fff;
        }
    }
`

const SearchIcon = styled.i`
    font-size: 17px;
    color: #969696;
`
const RightWrapper = styled.div`
    float: right;
    height: 58px;
    li {
        float: right;
        padding: 0 10px;
        line-height: 58px;
    }
`

const Button = styled.a`
    display: inline-block;
    width: 100px;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
    border: 1px solid transparent;

    :hover {
        color: #fff;
        background-color: #ec6149;
    }

    i {
        margin-right: 2px;
    }
`

const PlainButton = styled(Button)`
    width: 80px;
    background-color: #fff;
    color: #ea6f5a;
    border: 1px solid #ea6f5a;
    :hover {
        color: #ec6149;
        border-color: #ec6149;
        background-color: rgba(236, 97, 73, 0.05);
    }
`

const ALink = styled.a`
    color: #969696;
    font-size: 14px;
`

const Aa = styled.a`
    font-size: 20px;
    font-weight: 400;
    color: #969696;
`

const mapStateToProps = (state) => {
    return {
        focus: state.headerReducer.get('focus'),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: bindActionCreators(actions, dispatch),
        // onInputFocus: () => {
        //     dispatch({
        //         type: actionTypes.SEARCH_FOCUS,
        //         payload: {
        //             focused: true,
        //         },
        //     })
        // },
        // onInputBlur: () => {
        //     dispatch({
        //         type: actionTypes.SEARCH_FOCUS,
        //         payload: {
        //             focused: false,
        //         },
        //     })
        // },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
