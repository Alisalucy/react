import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// 引入的是全局的样式
import { Globalstyle } from './style.js';
import { Globalstyle1 } from './static/font/iconfont.js';

// 引入子组件
import Header from './comon/header';
import Home from './page/home'
import Detail from './page/detail'

// 引入store
import { Provider } from 'react-redux';
import store from './store'


export default class App extends React.Component {
    render() {
        return (

            <Provider store={store}>
                <div>
                    <Globalstyle />
                    <Globalstyle1 />
                    <Header></Header>
                    <BrowserRouter>
                    {/* exact 完全匹配路由 */}
                        <div>
                            <Route path='/' exact component={Home}></Route>
                            <Route path='/detail' exact component={Detail}></Route>
                        </div>
                    </BrowserRouter>

                </div>
            </Provider >

        )
    }
}