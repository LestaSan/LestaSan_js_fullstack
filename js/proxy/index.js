// 小明表白的故事
// 小明 talk in js
// js 具有强大的表现能力
// js 还是弱类型语言 Java是静态型语言
//js 基础类型 字符串 数字，
//对象{}，array，function
//symbol
//bool 布尔值  false  null 为空  udefinded
//六大基础类型 1个复杂类型
var xiaoming = {
    name: '小明',
    age: 21,
    hasGirlFriend: false,
    job: null,
    city: undefined,
    //方法 行为
    sendFlower: function(target){
        // 1 买花
        var flower = new Flower('满天星');
        if (typeof target.receiveFlower == 'function')
            target.receiveFlower(flower, this.name);
        else
            console.log('拿到名企前是不可能谈恋爱的。');
    }
}
//空的对象字面量
var xueba = {

}

// 具有详述性，最简单创造的对象
var xiaomei = {
    name: '小美',
    room: '西一4203',
    hometown: '浙江', 
    age: 20,
    hasBoyFriend: false,
    job: null,
    receiveFlower: function(flower, name){
        console.log('收到' + name +  '送的' + flower.type)
    },
    // 监听好心情
    /*
    *功能：提供心情监听
    *参数：fn 是类型函数
    *在一段时间后，心情好了，将fn执行
    */
    listenGoodMood: function(fn){   //fn function简写
        setTimeout(function(){
            fn();
        },10000)
        // typeof fn === 'function'
        // fn();
    
    }
    
}

// 类要大写，对象小写 函数就是一个类
var Flower = function(type){
    this.type = type || '玫瑰'
}

var xiaoxue = {
    name: '小雪',
    receiveFlower: function(flower, name){
        xiaomei.listenGoodMood(function(){
            xiaomei.receiveFlower(flower, name)
        })
        // if (name === '小明'){
        //     console.log( '让我们在一起吧')
        // }else {
        // xiaomei.receiveFlower(flower, name)
        // }
        // 叫小美过来。。
        // xiaomei.receiveFlower(flower, name)
        // 实现了同样的收花方法，receiveFlower这种叫 接口 interface
        // 小雪，小美都实现了同样的方法，实现了相同的接口
        // 只要实现了相同的接口，就可以互换对象
    }
}
// xiaoming.sendFlower(xiaomei);

//给小雪 小雪转送
xiaoming.sendFlower(xiaoxue);  //（）里 形参
// xiaoming.sendFlower(xueba);


