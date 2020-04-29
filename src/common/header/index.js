import React from "react"
import {HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button} from "./style.js"
import {CSSTransition} from 'react-transition-group'
import {connect} from "react-redux"
import {searchFocus,searchBlur} from "./store/actionCreators.js"
const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo></Logo>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <SearchWrapper>
                    <CSSTransition 
                        in={props.focused}
                        classNames="slide"
                        timeout={200}>
                        <NavSearch className={props.focused ? "focused" : ""}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}>
                        </NavSearch>
                    </CSSTransition>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}

// mapStateToProps 函数 连接方式 拿到store里面的数据
// map映射(给) State是store里面的数据 To给 Props
// 结论1：把store里面的数据映射给props
// 结论2：只要state里面数据发生改变就会调用mapStateToProps，且mapStateToProps返回的是一个对象，该对象的值会更新到组件里面
const mapStateToProps = (state) => {
    // state相当于reducer中的state
    return {
        // 将state里面的focused，映射到组件里面props中的focused
        // focused:state.header.focused
        focused:state.header.get("focused")
    }
}
// mapDispatchToProps   相当于将store.dispatch映射给props
const mapDispatchToProps = (dispatch) => {
    // state相当于reducer中的state
    return {
        handleInputFocus(){
            const action = searchFocus();
            dispatch(action)
        },
        handleInputBlur(){
            const action = searchBlur();
            dispatch(action)
        }
    }
}
// connect让Header与store中的数据相连接
export default connect(mapStateToProps,mapDispatchToProps)(Header)

