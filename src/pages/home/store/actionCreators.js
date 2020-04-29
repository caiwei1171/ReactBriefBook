import {CHANGE_HOME_DATA,CHANGE_HOME_IMG} from "./actionTypes.js"
import axios from "axios"
export const getAction = (action) => ({
    type:CHANGE_HOME_DATA,
    articleList:action
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get("api/home.json").then(res => {
            const result = res.data.data.articleList;
            const action = getAction(result)
            const result1 = res.data.data.images;
            const action1 = getActionImage(result1)
            dispatch(action)
            dispatch(action1)
        })
    }
}

export const getActionImage = (action) => ({
    type:CHANGE_HOME_IMG,
    images:action
})

