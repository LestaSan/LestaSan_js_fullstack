// // // 泡一杯咖啡 talk in js 
// // // 流程
// // // 把水煮沸
// // // 用水冲泡咖啡
// // // 把咖啡倒进杯子
// // // 加糖和牛奶
// // // 语义 转化为 代码
// // // 方法 methods
// // // boilWater()
// // // brewCoffeeGriends()
// // // pourInCup()
// // // addSugarAndMilk()
// // var Coffee = function() {

// // }
// // Coffee.prototype.boilWater = function() {
// //     console.log('把水煮沸');
// // }
// // Coffee.prototype.brewCoffeeGriends = function() {
// //     console.log('用水冲泡咖啡');
// // }
// // Coffee.prototype.pourInCup = function() {
// //     console.log('把咖啡倒进杯子');
// // }
// // Coffee.prototype.addSugarAndMilk = function() {
// //     console.log('加糖和牛奶');
// // }
// // Coffee.prototype.init = function() {
// //     this.boilWater();
// //     this.brewCoffeeGriends();
// //     this.pourInCup();
// //     this.addSugarAndMilk();
// // }

// // var coffee = new Coffee();
// // coffee.init();


// // // 泡杯茶
// // // 把水烧开
// // // 用沸水浸泡茶叶
// // // 把茶水倒进杯子
// // // 加柠檬


// // // 代码在重复 封装不怎么完美
// // // 继承？
// // // 代码如果能复用就好了
// // // 第一步 把水烧开 共用这个方法 少写
// // // Coffee Tea
// // // 共用 这两个类，不是父子，是什么关系，可以让复用方法？
// // // 父类 Coffee Tea 是兄弟类
// // // 饮料类 drink 抽象类
// // // abstract class 一切皆抽象
// // // boilWater 共同点
// // // steepTepBag brewCoffeeGriends
// // // 抽象出来的方法
// // // 用水泡（饮品） brew() 点到即止
// // // 共同点 不同点
// // // 把咖啡倒进杯子  把茶水倒进杯子
// // // 共同点 倒进杯子 pourInCup()
// // // 加糖和牛奶  加柠檬 addCondiments()

// // var Tea = function() {

// // }
// // Tee.prototype.boilWater = function() {
// //     console.log('把水烧开');
// // }
// // Tea.prototype.steepTepBag = function() {
// //     console.log('用沸水浸泡茶叶');
// // }
// // Tea.prototype.pourInCup = function() {
// //     console.log('把茶水倒进杯子');
// // }
// // Tea.prototype.addLemon = function() {
// //     console.log('加柠檬');
// // }
// // Tea.prototype.init = function() {
// //     this.boilWater();
// //     this.steepTepBag();
// //     this.pourInCup();
// //     this.addLemon();
// // }

// // var tea = new Tea();
// // tea.init();


// // 抽象类 模板模式
// // 优化方法 给抽象类
// function Beverage() {

// }
// Beverage.prototype.boilWater = function() {
//     console.log('把水煮沸');
// }
// // 原料不一样, 方法不去具体实现，提供这个接口，子类一定要实现这个方法
// Beverage.prototype.brew = function() {}
// Beverage.prototype.pourInCup = function() {}
// Beverage.prototype.addCondiments = function() {}
// Beverage.prototype.init = function() {
//     this.boilWater();
//     this.brew();
//     this.pourInCup();
//     this.addCondiments();
// }

// var Coffee = function() {};
// Coffee.prototype = new Beverage();
// Coffee.prototype.brew = function() {
//     console.log('用沸水泡咖啡');
// }
// Coffee.prototype.pourInCup = function() {
//     console.log('将咖啡倒进杯子');
// }
// Coffee.prototype.addCondiments = function() {
//     console.log('加糖和牛奶');
// }


// var Tea = function() {};
// Tea.prototype = new Beverage();
// // 覆盖一下父类方法 brew就是一个接口 interface
// Tea.prototype.brew = function() {
//     console.log('用水浸泡茶叶');
// }
// Tea.prototype.pourInCup = function() {
//     console.log('将茶水倒进杯子');
// }
// Tea.prototype.addCondiments = function() {
//     console.log('加柠檬');
// }


// var coffee = new Coffee();
// coffee.init();
// var tea = new Tea();
// tea.init();

// 用jsway 构建模板模式
// 何为模板？ 它的大体结构已确定，4布， 动作概念都由， 差异点， 继承 抽象类的概念来实现，
// js可以更优雅，差异点 即为 参数
var Beverage = function(param) {
    var boilWater = function() {
        console.log('把水煮沸');
    }
    var brew = param.brew || function() {
        throw new Error('必须传递brew方法');
    }
    var pourInCup = param.pourInCup || function() {
        throw new Error('必须传递pourInCup方法');
    }
    var addCondiments = param.addCondiments || function() {
        throw new Error('必须传递addCondiments方法');
    }
    
    var F = function() {};
    F.prototype.init = function() {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }
    return F;
}
// 模板可配置部分，作为参数传递给模板对象
var Coffee = Beverage({
    brew: function() {
        console.log('用沸水泡咖啡');
    },
    pourInCup: function() {
        console.log('把咖啡倒进杯子');
    },
    addCondiments: function() {
        console.log('加糖和牛奶');
    }
});
var coffee = new Coffee();
coffee.init();

