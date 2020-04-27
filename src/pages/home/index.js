import React,{Component} from "react"
import {HomeWrapper,HomeLeft,HomeRight} from "./style.js"
class Home extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft></HomeLeft>
                <HomeRight></HomeRight>
            </HomeWrapper>
        )
    }
}
export default Home