/*
 * @Author: 吴晓晴
 * @Date: 2021-05-25 22:36:51
 * @LastEditTime: 2021-05-28 21:01:35
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\admin\src\pages\Main.js
 */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Login'
import Admin from './Admin'



function Main() {
    return (
        <Router>
            <Route path="/" exact component={Login}></Route>
            <Route path="/index/"  component={Admin}></Route>
        </Router>
    )
}

export default Main