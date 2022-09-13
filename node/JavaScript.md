### ES6变量

var全局定义 有变量提升
let块级作用域,必须先定义再使用,不能有变量重名
const就是不能改变的let

### new关键字

- 创建一个空的对象
- 空对象的原型指向于构造函数的原型
- 将空对象作为构造函数的上下文(改变this指向)
- 对构造函数有返回值的处理判断

### 手写new函数

```javascript
function fun(age,name){
    this.age = age
    this.name = name
}
function create(fn,...args) {
    //1,创建一个空的对象
    let obj = {}
    //2,空对象的原型指向于构造函数的原型
    Object.setPrototypeOf(obj,fn.prototype)
    //3,将空对象作为构造函数的上下文(改变this指向)
    let result = fn.apply(obj,args)
    //4,对构造函数有返回值的处理判断
    return result instanceof Object ? result : obj
}

console.log(create(fun,18,'Max'))
console.log(new fun(18,'Max'))
```

### this指向

在ES6之前,谁调用this,this就指向谁
全局就指向windows
在对象中的函数调用就指向对象
事件绑定的this指向调用的节点(和e.target的区别,this指向的是绑定事件的节点,举个例子,在点击事件中点击div中的span的话,this返回的是div节点,e.target返回的是span节点)

### Promise

#### Promise的介绍和基本使用

JS中进行一步编程的新解决方案 旧解决方案是回调函数
promise支持链式调用,解决回调地狱
指定回调函数的方式更加灵活 promise 启动异步任务=>返回promise对象=>给promise对象板顶回调函数(甚至可以在异步任务结束后指定多个)

```javascript
let a = new Promise(function(resolve,reject){

        reject()
    })
    //pending执行中
    //fulfilled
    //renject
    //a是promise对象
    a.then(function(){
        //兑现承诺,这个函数被执行

    }).catch(function(){
        //拒绝承诺,这个函数就会被执行
       
    })
```

#### Promise的介绍和基本使用

JS中进行一步编程的新解决方案 旧解决方案是回调函数
promise支持链式调用,解决回调地狱
指定回调函数的方式更加灵活 promise 启动异步任务=>返回promise对象=>给promise对象板顶回调函数(甚至可以在异步任务结束后指定多个)

```javascript
let a = new Promise(function(resolve,reject){

        reject()
    })
    //pending执行中
    //fulfilled
    //renject
    //a是promise对象
    a.then(function(){
        //兑现承诺,这个函数被执行

    }).catch(function(){
        //拒绝承诺,这个函数就会被执行
       
    })
```

### async/await

### 如何改变this指向

call obj1.function.call(obj2)
apply obj1.function.apply(obj2)
call和apply的区别
call可以往里传入多个参数,apply只能传入两个参数,第二个参数为数组
bind不会自动执行函数,会形成一个新的函数this指向为改变的的参数

### 箭头函数的this

1.当我们使用箭头函数的时候，箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的。
2.箭头函数中的this引用的就是最近作用域中的this
3.向外层作用域中，一层一层查找this，直到有this的定义
4.有的箭头函数都没有自己的 this。 不适合定义一个 对象的方法。

### 解构赋值

快速从对象和数组中获取成员
let [1,2,3,[4,5,[7.8] = arr
按照站位快速获取里面的值

### 对象

JavaScript最基本的数据类型
JavaScript对象也可以从其他对象继承属性，这个其他对象称为其“原型”

#### 创建对象

字面量创建 let obj = {}
内置构造函数 new Object()
自定义构造函数 new createfunction
Object.create({})创建一个新对象,使用其第一个参数作为新对象的原型

#### 删除对象属性

delete操作符
只删除自有属性,无法删除继承属性
操作成功或没有影响会返回true
无法删除全局对象属性

#### 测试对象属性

in对象是否有包含相应名字的自有属性或继承属性
hasOwnProperty()对象是否有给定名字的属性,不能测试继承的属性
propertyIsEnumerable()

#### 枚举/循环遍历对象属性

for/in
Object.keys(对象)返回对象内自有属性名的数组.不包含不可枚举属性,继承属性或名字是符号的属性
Object.getOwnPropertyNames()与Object.keys()类似
Object.getOwnPropertySymbols()返回名字是符号的自有属性
Reflect.ownKeys()返回所有属性名

#### 扩展对象

Object.assign()接受两个或多个对象作为参数,会修改并返回第一个参数,第一个参数是目标对象,会覆盖目标对象的同名属性

#### 序列化对象

把对象的状态转换为字符串的过程
JSON.stringify()序列化
JSON.parse()恢复JS对象

#### 对象方法(原型上的方法)

toString()
toLocalString()
valueOf()
toJSON()

#### 属性获取和设置

getter和setter

### 数组

#### 创建数组

数组字面量 数组中的值不需要常量,可以使任意表达式
扩展操作符
Array()构造函数 传入一个数组参数指定长度,传入两个或更多个数组元素

Array.of()解决Array()没法构造只有一个数值的数组
Array.from()传入可迭代对象或类数组对象作为参数

#### 读写数据元素

#### 稀疏数组

#### 添加和删除数组元素

push unshift
pop shift
delete删除元素不改变length

#### 迭代数组

for/of+extries()

#### 数组方法

#### 数组迭代器方法

forEach()迭代循环数组的每一个元素调用我们后面写入的函数,这个方法可以接受三个参数,第一个是数组元素的值,第二个是数组元素的索引,第三个是数组本身.如果只传入一个参数,那就是数组元素的值

map()迭代循环数组的每一个元素调用我们传入的函数,返回函数的每一个返回值形成一个新的数组,如果数组是稀疏数组,空缺部分不会调用函数,形成的新数组同样是稀疏数组

filter()迭代循环数组的每一个元素调用我们传入的断言函数,函数返回布尔值,返回为true的元素形成一个新的数组

find()和findIndex()迭代循环数组的每一个元素调用我们传入的断言函数,返回第一个经过函数返回true的元素随后停止遍历,find返回元素的值,findIndex返回元素的索引

every()与some()迭代循环数组的每一个元素调用断言函数,调用every的数组如果有一个元素通过断言函数返回false就停止迭代并返回false,全部通过函数后返回true.调用some数组,如果有一个元素调用函数返回true后停止迭代并返回true,只有全部函数返回false才返回false

reduce()与reduceRight()传入两个参数,第一个是执行的函数第一个执行的函数是归并函数需要两个参数,返回的值作为下一次迭代的第一个值.第二个是可选值,作为执行用函数的初始值,第三可传入参数为索引,第四个可选参数是数组本身
reduceRight从最高索引开始调用

flat()和flatMap()将嵌套数组打平,faltMap与Map类似,将map返回的嵌套数组打平

concat()返回一个新数组,包含调用方法的数组元素和传入的参数,如果传入的是数组则只会拼接数组中的元素

#### 栈和队列操作

```javascript
let a = [1,2,3,4,5]
//push()
a.push(6) // 返回[1,2,3,4,5,6] 

//pop()
a.pop() // 返回5 pop返回弹出的那个元素

//shift()
a.shift() // 返回1 shift返回弹出的那个元素

//unshift
a.unshift(6) // [6,1,2,3,4,5]

// slice()
a.slice(0,3) // 从a数组中切除第0-3个数组(不包括3)  [1,2,3]
//如果没有第二个参数则从第一个参数的索引一直切到最后
//参数如果是负数,例-1 = 倒数第一个参数 -2 = 倒数第二个参数


//splice //返回的是被删除元素的数组
a.splice(1,3) // [2,3,4] a = [1,5]
// 第一个参数是删除的起始位置,第二个元素为删除的个数,后面的参数可选,插入到删除位置形成新数组

// fill
a.fill(10,2) // [1,2,10,10,10]
// 第一个参数是填充的元素,第二个参数是开始填充的索引位置(包括其本身),第三个参数是结束填充的索引位置(不包括)

//copyWithin
a.fill(1,2,3) // [1,3,3,4,5]
//第一个参数为复制目的地的索引,第二个参数为需要复制起始值的索引(默认为0),第三个参数为复制终点的索引(默认为数组的长度)
```



#### 数组的排序和索引

```javascript
let a = [1,2,3,4,5]
// indexOf lastIndexOf
a.indexOf(3) // 2 
//从数组中找到和参数相等的元素,并返回其索引,lastIndexOf()从后往前找,如果没有找到都返回-1

// includes
a.includes(1) //true
a.includes(19) //false
//从数组中寻找参数,存在就返回true,没有就返回false.与indexOf的区别在于include可以检测数组中的NaN值

// Sort
a.sort() //默认按照首字母顺序比较进行排序,如果需要对非字母进行排序,要传入一个比较函数.如果是从小到大排序,传入的函数返回值为<0,从大到小,传入返回值>0

// reverse 翻转数组的顺序
```



#### 数组转换字符串

```javascript
//join 将所有数组元素转换为一个字符串,可以传入一个符号参数,作为字符串之间的拼接符
a.join("-") // '1-2-3-4-5'
// 如果不传入参数,默认分隔符为,

//toString()等同于无参数的join
```



#### 静态数组函数

```javascript
Array.isArray([]) //判定参数是否为数组
```





### 函数



#### 类数组对象

### 原型

通过对象字面量创建的所有对象都有相同的原型对象
使用new关键字和构造函数调用创建的对象，使用构造函数prototype属性的值作为它们的原型

***对象.\*proto\*===构造函数的原型***

#### 原型链

自定义构造函数创建的对象有_proto_这个隐性原型,连接着构造函数的显式原型protptype,构造函数的protptype上有个_proto_链接到Object的prototype,这三者的链接形成了原型链

原型链的定点是Object.prototype = null

#### 面向对象继承

构造函数继承属性,通过改变this指向

原型继承:新对象.prototype = new 想继承的构造函数