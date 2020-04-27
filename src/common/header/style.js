import styled from "styled-components"
import logoPic from "../../static/logo.png"
export const HeaderWrapper = styled.div`

    z-index:1;
    position:relative;
    height:56px;
    border-bottom:1px solid #f0f0f0;

`
export const Logo = styled.div`

    position:absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
    cursor:pointer;

`
export const Nav = styled.div`

    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;

`
export const NavItem = styled.div`

    line-height:56px;
    height:100%;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
        cursor:pointer
    }
    &.right{
        float:right;
        color:#969696;
        cursor:pointer
    }
    &.active{
        color:#ea6f5a
    }

`
export const SearchWrapper = styled.div`

    position:relative;
    float:left;

`
export const NavSearch = styled.input.attrs({
    placeholder:"搜索"
})`
    width:160px;
    height:39px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    outline:none;
    border:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#666
    }
`
export const Addition = styled.div`

    position:absolute;
    top:0;
    right:20px;
    height:56px;

`
export const Button = styled.div`

    float:right;
    line-height:38px;
    border-radius:19px;
    padding:0 20px;
    margin-top:9px;
    margin-left:20px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color:#ec6149;
        cursor:pointer
    }
    &.writing{
        color:#fff;
        background:#ec6149;
        cursor:pointer
    }

`