/*
 * @Author: 吴晓晴
 * @Date: 2021-05-23 13:52:20
 * @LastEditTime: 2021-06-02 22:21:03
 * @FilePath: \webDevelopment\blogDev\jspang-blog\react-blog\admin\src\config\config.js
 */
let baseUrl;
let configUrl = "http://127.0.0.1:7001"
let devUrl = '/api'
if (process.env.NODE_ENV == 'development') {
    baseUrl = devUrl;
} else if (process.env.NODE_ENV == 'debug') {
    baseUrl = '';
} else if (process.env.NODE_ENV == 'production') {
    baseUrl = 'http://47.93.6.17:7001';
}
let config = {
    baseUrl,
    configUrl
};
export default config;