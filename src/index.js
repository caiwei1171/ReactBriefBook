import React from 'react';
import ReactDOM from 'react-dom';

import App from "./App.js"
// import ToDoList from './ToDoList';
// import { Provider} from "react-redux"
// import store from "./store/index.js"
//Provider把store里面所有的数据传递给子组件
// ReactDOM.render(
//   // <React.StrictMode>
//   <Provider store={store}>
//     <ToDoList />
//   </Provider>,
//   // </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
