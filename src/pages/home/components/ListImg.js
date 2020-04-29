import React from "react"
import {ImgItem} from "../style.js"
import {connect} from "react-redux"

const ListImg = (props) => {
    return (
        <div>
            {
                props.list.map(item => {
                    return (
                        <ImgItem key={item.get("id")}>
                            <img className="image" src={item.get("imgUrl")} alt=""/>
                        </ImgItem>
                    )
                })
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state.home.get("images"))
    return {
        list:state.home.get("images")
    }
}
export default connect(mapStateToProps,null)(ListImg)
