// console.log('工厂模式'); 
// 函数属于 js基本类型中的 对象
// 函数是一等对象
//类就是一个简单的只有一个构造函数
// 类跟函数好像没有区别？
// js 本身并没有类，只是用的人多了，给了这个实现
//js 里其实只有对象 而且是基于原型式的对象     object原型对象的始祖
//有参照物  就是原型 prototype
//所以js里不需要传统的继承，只要有个参照物就可以实现原型继承
var Bicycle = function(brand){        //function Bcicyle(brand){}
    // 构造函数 constructor
    // new 时执行，
    // 在构造函数内部  this
    this.brand = brand || '凤凰'

}

// 原型  凤凰单车等等
// 共享单车在原型基础上多了二维码、手机支付
// js认为 这是一种继承的关系 但不是完全的 现代单车 核心是共享
// 共享单车完全颠覆了自行车，

Bicycle.prototype = {
    sellBicycle: function(model){  //model是形参 外界可传数据
        let bicycle = null;
        switch(model){        //选择
            case 'Giant':
                bycicle = new Giant()
            break;
            case 'The Speed Ster':
                bicycle = new Speedster()
            break;
            case 'U2':
                bicycle = new U2()
            break; 
        }
        bicycle.assemble();
        bicycle.wash();
        bicycle.provideRepair();
        // 把车卖出去
        return bicycle
        // console.log('卖车了...');  //打印
        // return 'null';    //返回值  不然就是undefind
        // 面向对象们
        // 卖车，要有商店，很多车，维修人员，仓库人员     即 工厂


    }
}
// js 的基本类型
// 字符串，数字，布尔值，undefined，null
// 复杂类型 object <-prototype array function json


//具体牌子的车 具体对象 需要新建一个类
function Speedster(){
        
}
Speedster.prototype = {
    assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },
      provideRepair: function() {
        console.log('保修三年');
    }
    
}
//又一个
function Gian(){
    
}
Giant.prototype = {
    assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },
      provideRepair: function() {
        console.log('保修三年');
    }
}

function U2(){
}
U2.prootype = {
    assemble: function() {
        console.log('组装完成');
      },
      wash: function() {
        console.log('清洗完成');
      },
      provideRepair: function() {
        console.log('保修三年');
    }
}

var bicycle = new Bicycle('永久');
console.log(bicycle.sellBicycle());
