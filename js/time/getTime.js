// ajax 带上时间戳去请求服务器，保证安全
// 时间戳+uid md5值
// 20160614134947


// console.log(generateTime().getFullYear);
function timetrans(){
    var date = new Date();//如果date为13位不需要乘1000
    console.log(date);
    var Y = date.getFullYear() + '-';
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
    var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
    return Y+M+D+h+m+s;
}
timetrans();
console.log(timetrans())