/*
 * @Author: 吴晓晴
 * @Date: 2021-05-23 13:52:20
 * @LastEditTime: 2021-05-23 14:28:49
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\wxq-blog\src\config\config.js
 */
let baseUrl;
let configUrl = "http://127.0.0.1:7001"
let devUrl = '/api'
if (process.env.NODE_ENV == 'development') {
    baseUrl = devUrl;
} else if (process.env.NODE_ENV == 'debug') {
    baseUrl = '';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'http://127.0.0.1:7001';
}
let config = {
    baseUrl,
    configUrl
};
export default config;