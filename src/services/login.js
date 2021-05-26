/*
 * @Author: 吴晓晴
 * @Date: 2021-05-26 22:03:41
 * @LastEditTime: 2021-05-26 22:24:17
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\admin\src\services\login.js
 */
import {post,get} from "../config/axios"


//请求方式
const checkLogin = data=> post('/admin/checkLogin',data);


export default{
    checkLogin
}