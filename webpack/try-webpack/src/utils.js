module.exports = {
    log: (message) => {
        // && 前面为真 后面才执行
        console && console.log(message)
    }
}