import React,{Component} from "react"
import {HomeWrapper,HomeLeft,HomeRight} from "./style.js"
import {connect} from "react-redux"
import List from "./components/List.js"
import ListImg from "./components/ListImg.js"
import {getHomeInfo} from "./store/actionCreators.js"
class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload-images.jianshu.io/upload_images/18428859-45ae4e678de02148.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <ListImg></ListImg>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData()
    }
}
const mapStateToProps = (state) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeHomeData(){
            const action = getHomeInfo();
            dispatch(action)
        }
    }
}
// connect让Header与store中的数据相连接
export default connect(mapStateToProps,mapDispatchToProps)(Home)
