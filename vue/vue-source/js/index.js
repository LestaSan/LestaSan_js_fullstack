class Vue {
    constructor(options) {
        this.data = options.data;
        this.methods = options.methods;
        // console.log(Object.keys(this.data))
        Object.keys(this.data).forEach((key) => {
            // console.log(key)
            this.proxyKeys(key)
        })
        // data 成为一个发布者
        // 发布者 设局不只用于一个地方 模板 指令 方法里
        // 发布者？ 订阅？ 发布的关系 1对多的
        observe(this.data);
        new Compile(options.el, this);
        options.mounted.call(this);
        
    }
    proxyKeys (key) {
        Object.defineProperty(this, key, {
            enumerable: false,
            configurable: true,
            get: function getter () {
                return this.data[key];
            },
            set: function setter (newVal) {
                this.data[key] = newVal;
            }
        })
    }
}