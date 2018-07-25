import originJsonp from 'jsonp';
let jsonp = (url, data, option) => {
    return new Promise((resolve, reject) => {
        originJsonp(buildUrl(url, data), option, ((err, data) => {
            if (!err) {
                resolve(data);
            } else {
                reject(err);
            }
        }))
    })
}

function buildUrl(url, data) {
    console.log(url, data)
    let params = [];
    for (var k in data) {
        params.push(`${k}=${data[k]}`)
    }
    let param = params.join('&')
    console.log(param)
    if (url.indexOf('?') === -1) {
        url += '?' + param;
    } else {
        url += '&' + param;
    }
    // console.log(url)
    return url
}

export default jsonp;