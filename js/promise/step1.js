class Promise {
    constructor(executer) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = []
        // value?  是executor调用时传过来的结果
        let resolve = (value) => {
            if (this.status == 'pending') {
                this.status = 'resolved';
                this.value = value;
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.status == 'pending') {
                this.status = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        // resolve, reject
        executer(resolve, reject);
        // ajax setTimeout node数据库处理 fs file
    }
    then (onFullFilled, onRejected) {
        if (this.status == 'resolved') {
            onFullFilled(this.value);
        }
        if (this.status == 'rejected') {
            onRejected(this.reason)
        }
        if (this.status == 'pending') {
            this.onResolvedCallbacks.push(() => {
                onFullFilled(this.value)
            })
            this.onRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
    }
}

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('有问题')
    }, 2000);
}) 
p.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err)
})
module.exports = Promise