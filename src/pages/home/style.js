import styled from "styled-components"
export const HomeWrapper = styled.div`

    width:960px;
    margin:0 auto;
    overflow:hidden;

`
export const HomeLeft = styled.div`

    width:626px;
    float:left;
    margin-left:15px;
    padding-top:30px;
    .banner-img{
        width:625px;
        height:270px;
    }

`
export const HomeRight = styled.div`

    width:280px;
    float:right;
    padding-top:30px;

`
export const ListItem = styled.div`

    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
    padding:20px 0;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:10px;
    }

`
export const ListInfo = styled.div`

    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#333
    }

`
export const ImgItem = styled.div`

    width:100%;
    margin-bottom:4px;
    .image{
        display:block;
        width:280px;
        height:65px;
        margin-bottom:8px
    }

`