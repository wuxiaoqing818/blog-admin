/*
 * @Author: 吴晓晴
 * @Date: 2021-05-26 23:01:01
 * @LastEditTime: 2021-05-26 23:01:35
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\admin\src\services\article.js
 */
import { post, get } from "../config/axios"


//请求方式
//获取类别信息
const getTypeInfo = data => get('/admin/getTypeInfo', data);


export default {
    getTypeInfo
}