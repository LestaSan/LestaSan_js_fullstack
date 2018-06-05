// 统一小程序wx.request请求
// 函数 url, params, get POST 
import wepy from 'wepy';
const wxRequest = async (params = {}, url) => {
    // wx.request
    // @params json query 传查询参数 method 方法
    let data = params.query || {};
    let res = await wepy.request({
        url: url,
        method: params.method || 'GET',
        data: data,
        header: {'Content-Type': 'application/json'}
    });
    // return ?
    return res
}
module.exports = {
    wxRequest
}