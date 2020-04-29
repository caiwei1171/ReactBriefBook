import {SEARCH_FOCUS,SEARCH_BLUR} from "./actionTypes.js"
import {fromJS} from "immutable"
// 使用immutable目的是提高性能，，它不会轻易修改，要想修改就要调用他的api  set与get方法
// fromJS它能把js对象改为immutable，防止数据被轻易的修改
const defaultState = fromJS({
    focused:false
})

export default (state = defaultState,action) => {
    if(action.type === SEARCH_FOCUS){
        // return {
        //     focused:true
        // }
        return state.set("focused",true);
    }
    if(action.type === SEARCH_BLUR){
        // return {
        //     focused:false
        // }
        return state.set("focused",false);
    }
    return state;
}