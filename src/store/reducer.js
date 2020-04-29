import headerReducer from "../common/header/store/reducer.js"
import HomeReducer from "../pages/home/store/reducer.js"
import {combineReducers} from "redux"

export default combineReducers({//combineReducers把小仓库进行合并
    header:headerReducer,
    home:HomeReducer
})
