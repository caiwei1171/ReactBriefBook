import React from "react"
import {HeaderWrapper,Logo,Nav,NavItem,SearchWrapper,NavSearch,Addition,Button} from "./style.js"

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo></Logo>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <SearchWrapper>
                    <NavSearch></NavSearch>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing">写文章</Button>
                <Button className="reg">注册</Button>
            </Addition>
        </HeaderWrapper>
    )
}
export default Header
