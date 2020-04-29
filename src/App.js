import React,{Component} from "react"
import Header from "./common/header/index.js"
import {GlobalStyle} from "./style.js"
import {Route,BrowserRouter} from "react-router-dom"
import { Provider} from "react-redux"
import store from "./store/index.js"

import Home from "./pages/home/index.js"
import Login from "./pages/login/index.js"
class App extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter>
                        <GlobalStyle/>
                            <div>
                                <Header/>
                                <Route path="/" exact component={Home} />
                                <Route path="/login" exact component={Login} />
                            </div>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    }
}
export default App

/* <Route path="/" exact render={() => <h1>Home</h1>} /> exact属性：只显示一个页面的内容 render:将页面内容渲染出来，属性值是一个匿名函数 */
/* <Route path="/" exact component={Home} /> component属性的值是引入的子组件，作用是将子组件渲染出来 */
