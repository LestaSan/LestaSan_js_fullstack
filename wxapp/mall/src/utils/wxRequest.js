// 统一小程序wx.request请求
// 函数 url, params, get POST 
import wepy from 'wepy';
import util from '@/utils/util';
import md5 from '@/utils/md5';
const API_SECRET_KEY = 'www.mall.cycle.com';
const TIMESTAMP = util.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());
// 前端，服务器端 验证
const wxRequest = async (params = {}, url) => {
    // wx.request
    // @params json query 传查询参数 method 方法
    let data = params.query || {};
    // 在请求的过程中带上时间戳常用的做法
    // 签名
    // 加密 code 你有 MD5
    // 加密
    data.sign = SIGN;
    data.time = TIMESTAMP;
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