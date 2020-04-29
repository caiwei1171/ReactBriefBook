// import React,{Component} from "react"
import React from "react"
import {ListItem,ListInfo} from "../style.js"
import {connect} from "react-redux"
// class List extends Component{
//     render(){
//         return (
//             <div>
//                 {
//                     this.props.list.map((item) => {
//                         return (
//                             <ListItem key={item.get("id")}>
//                                 <ListInfo>
//                                     <h3 className="title">{item.get("title")}</h3>
//                                     <p className="desc">{item.get("desc")}</p>
//                                 </ListInfo>
//                                 <img className="pic" src={item.get("imgUrl")} alt=""/>
//                             </ListItem>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }
const List = (props) => {
    return (
        <div>
            {
                props.list.map((item) => {
                    return (
                        <ListItem key={item.get("id")}>
                            <ListInfo>
                                <h3 className="title">{item.get("title")}</h3>
                                <p className="desc">{item.get("desc")}</p>
                            </ListInfo>
                            <img className="pic" src={item.get("imgUrl")} alt=""/>
                        </ListItem>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        list:state.home.get("articleList")
    }
}
// connect让Header与store中的数据相连接mapDispatchToProps
export default connect(mapStateToProps,null)(List)
