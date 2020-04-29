import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer.js"//引入记事本（存储的内容）
// const store = createStore(111)//把记事本递给store
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,
    compose(applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f))
export default store


