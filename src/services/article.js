/*
 * @Author: 吴晓晴
 * @Date: 2021-05-26 23:01:01
 * @LastEditTime: 2021-05-27 23:17:44
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\admin\src\services\article.js
 */
import { post, get } from "../config/axios"


//请求方式
//获取类别信息
const getTypeInfo = data => get('/admin/getTypeInfo', data);

//添加文章
const addArticle = data => post('/admin/addArticle', data);

//修改文章
const updateArticle = data => post('/admin/updateArticle', data);

//获取文章列表
const getArticleList = data => get('/admin/getArticleList', data);

//删除文章
const delArticle = data => get('/admin/delArticle/'+data.id, {});

//获取文章详情
const getArticleById = data => get('/admin/getArticleById/'+data.id, {});




export default {
    getTypeInfo,
    addArticle,
    updateArticle,
    getArticleList,
    delArticle,
    getArticleById
}