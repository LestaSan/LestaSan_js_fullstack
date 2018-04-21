function Person(name){
    this.name = name
}
Person.prototype.getName = function(){
    return this.name
}

//IT工程师/
//extend Person
function Coder(name, languages){
    //call的用法
    Person.call(this, name)     //将person拿来执行 .call  
    // 父类没有的可以加
    // 语言
    this.languages = languages
    
}
// new Person 新的对象  就是coder的原型对象   原型式继承
Coder.prototype = new Person()
Coder.prototype.construtor = Coder   //构造函数指向构造函数本身
Coder.prototype.getLanguages = function(){
    return this.languages
}

var wxf = new Person('汪西发');
console.log(wxf.name);

var xjy = new Coder('徐加元', ['javascript', 'python', 'c/c++']);   //[] 数组

console.log(xjy.name + ' ' + xjy.languages.join(','))  //join  将数组连接起来  ('') 用什么连接起来
console.log(xjy.getName());
console.log(xjy.getLanguages());
