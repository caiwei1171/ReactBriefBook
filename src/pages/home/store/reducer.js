import {CHANGE_HOME_DATA,CHANGE_HOME_IMG} from "./actionTypes.js"
import {fromJS} from "immutable"
const defaultState = fromJS({
    "articleList":[],
    "images":[]
})
export default (state=defaultState,action) => {
    if(action.type === CHANGE_HOME_DATA){
        return state.set("articleList",fromJS(action.articleList))
    }
    if(action.type === CHANGE_HOME_IMG){
        return state.set("images",fromJS(action.images))
    }
    return state
}