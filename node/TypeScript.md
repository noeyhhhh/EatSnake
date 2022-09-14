## TypeScript课程内容介绍

- TS介绍
- TS环境安装与初体验
- TS数据类型
- TS中的接口
- TS中的函数
- TS中的类
- TS中的泛型
- TS其他补充
- TS兼容性
- TS中的装饰器
- TS中的Mixins
- TS模块
- TS命名空间
- TS中的配置及环境搭建

## 第一章 TypeScript介绍

#### 1.简介

- TS是是由微软2012年开发的一款开源的编程语言
- TypeScript 是 Javascript 的超集，遵循最新的 ES6、Es5 规范。TypeScript 扩展了 JavaScript
  的语法
- 在js的基础上，为js添加了**类型支持**

#### 2.设计目标

- 遵循当前以及未来出现的ECMAScript规范
- 开发大型应用，可以编译程纯JavaScript,编译出来的JavaScript可以运行在浏览器上
- 成为跨平台的开发工具，TypeScript使用Apache作为开源协议，且能够再所有主流的操作系统上安装和执行

#### 3.TS优势

- 更早的发现错误
- 任何位置都有**代码提示**，增加开发效率
- 类型系统提升了代码的可维护性，重构更容易
- 使用最新的ECMAScript语法，最新
- ts类型推断机制，降低成本

#### 4.TS劣势

- 短期投入到工作可能增加开发成本
- 和有些库的结合不是很完美
- 学习需要成本，需要理解接口，泛型，类型等知识
- 集成到自动构建流程中需要额外的工作量

#### 5.TS与JS的区别

![1657037907209](C:\Users\11\AppData\Roaming\Typora\typora-user-images\1657037907209.png)

| JavaScript                 | TypeScript                                             |
| -------------------------- | ------------------------------------------------------ |
| 动态语言                   | 具有静态语言的特点                                     |
| 编译性语言运行时报错       | 编译期间报错                                           |
| 弱类型语言，没有类型       | 强类型语言，类似java, C++等，定义时指明类型            |
| 不支持模块、接口、泛型     | 支持模块、接口、泛型                                   |
| 基本数据类型和引用数据类型 | 更多的基本数据类型和引用数据类型，如any, never, enum等 |
| 在浏览器中直接执行         | 编译为js后才能在浏览器进行执行                         |





## 第二章 TS环境安装与初体验

#### 1.安装与运行

```js
npm install -g typescript
或者
cnpm install -g typescript
或者
yarn global add typescript
```

```js
tsc 文件名称.ts

tsc --watch  
```

#### 2.js缺陷的演示

```javascript
/* 
  1.没有对类型进行检测
  2.没有对是否传参进行检测
*/
function test(msg) {
  console.log(msg.length);
}

test("邱淑贞") // 可以正常使用
test(666) // undefine
test() // error
console.log("往后余生,风雪是你, 平淡是你,敲每一行代码想的都是你。");
console.log("你是CSS,我是DIV,就算我的布局再好,没了你也就没了色彩。");
```

采用TS书写同样的代码，我们可以看到，编译器非常友好的对我们进行了提示

```typescript
function test(msg) {
  console.log(msg.length);
}

test("邱淑贞") // 可以正常使用
test(666) // undefine
test() // error
console.log("往后余生,风雪是你, 平淡是你,敲每一行代码想的都是你。");
console.log("你是CSS,我是DIV,就算我的布局再好,没了你也就没了色彩。");
```

![1657039512822](C:\Users\11\AppData\Roaming\Typora\typora-user-images\1657039512822.png)



## 第三章 TS中的数据类型

#### 1.基础数据类型 

- number类型： 双精度 64 位浮点值。它可以用来表示整数和分数。

- boolean类型：表示逻辑值：true 和 false。
- string类型：一个字符系列，使用单引号（**'**）或双引号（**"**）来表示字符串类型。反引号（**`**）来定义多行文本和内嵌表达式

```typescript
export default {}

// 数值类型 number
let money:number; // 定义了一个名称叫做money的变量, 这个变量中将来只能存储数值类型的数据
money = 20;
// money = "200000"; // 会报错
// 注意点: 其它的用法和JS一样
// money = 0x00;
// money = 0o00;
// money = 0b00;
console.log(money); 

// 布尔类型 boolean
let flag:boolean;
flag = true;
// flag = 1; // 会报错  c语言
console.log(flag);

// 字符串类型 string
let beauty:string;
beauty = "李一桐";
let dream = `我的女神是${beauty},为了她，我想月入${money}k`;
console.log(dream); 


// 总结：
数值，字符串和布尔值是我们开发中最常使用的基础数据类型，与js中的数值，字符串和布尔完全一致，
在ts中我们主要做类型校验使用
```

#### 2.数组

> 数组：声明变量的一组集合称之为数组。

```typescript
export default {}
// 数组类型
// 方式一
// 表示定义了一个名称叫做beautyList的数组,这个数组中将来只能够存储字符串类型的数据
let beautyList:String[];
beautyList = ['李嘉欣','王祖贤','邱淑贞'];
// arr2 = ['李嘉欣','王祖贤'.'邱淑贞',2000] //报错
console.log(beautyList)

// 方式二
// 表示定义了一个名称叫做moneyList的数组,这个数组中将来只能存储数值类型的数据
let moneyList:Array<number>;
moneyList = [10, 30, 500]
// moneyList = ['a', 10, 20] //报错
console.log(moneyList)

// 方式三 联合类型
// 表示定义了一个名称叫做dream的数组,这个数组中将来既可以存储数值也可以存储字符串
let dream:(number | string)[]

// 方式四 任意类型
// 表示定义了一个名称叫做arbitrarily的数组,这个数组中将来可以存储任意类型的数据
let arbitrarily:any[]
```

#### 3.元祖

- 元祖类型Tuple
- TS中的元祖类型其实就是数组类型的扩展
- 元祖类型用来表示已知元素数量和类型的数组,各元素的类型不必相同,对应位置的类型需要相同

```typescript
export default {}

//元祖类型Tuple
// TS中的元祖类型其实就是数组类型的扩展
// 元祖类型用来表示已知元素数量和类型的数组,各元素的类型不必相同,对应位置的类型需要相同
// 表示定义了一个名称叫做tup1的元素,这个元祖中将来可以存储3个元素,
// 第一个元素必须是字符串类型,第二个元素必须是数字类型,第三个元素必须是布尔类型
let tup1:[string,number,boolean]
tup1 =['宋祖儿',100,true]
// tup1 = ['宋祖儿',100,false,200] //超过指定的长度会报错
// tup1 = [100.'宋祖儿',true]
// tup1 = ['杨超越', 100, true]

/*
	总结:
	定义: ['','',...]
    作用:元祖用于保存定长定数据类型的数据
    */
```

4.any与void

- any:表示任意类型,当我们不清楚某个值的具体类型的时候我们就可以使用any
- void:当一个函数没有返回值时,你通常会见到其返回值类型是void

```typescript
export default {}

//any类型
//any表示任意类型,当我们不清楚某个值的具体类型的时候我们就可以使用any
// 在TS中任何数据类型的值都可以负责给any类型

//使用场景一
// 变量的值会动态改变时,比如来自用户的输入,任意值类型可以让这些变量跳过编译阶段的类型检查
let salary: any = 1800
salary = 'my salary is 18k'
salary = false

// 使用场景二
// 改写现有代码时,任意值允许在编译时可选择地包含或移除类型检查
let x: any = 4
x.ifItExists(); // 正确,ifItExists方法在运行时可能存在,但这里不会检查
x.toFixed(); // //正确

// 使用场景三
// 定义存储各种类型数据的数组时
let beautyList: any[] = [1, false, 'fine']
beautyList[1] = 100

// void类型
// 某种程度上来说,void类型与any类型相反,它表示没有任何类型
// 当一个函数没有返回值时,你通常会见到其返回值类型是void
// 在TS中只有Null和undefined可以赋值给void类型
function makeMoney() : void{
    console.log("i want to make much money and marry a wife")
    // return "100K beauty" //报错
}
makeMoney()

let value:void;
// 定义了一个不可以保存任意类型数据的变量,只能保存Null和undefined
// value=100 //报错
// value = 'aa' // 报错
// 注意点: null和undefined是所有类型的子类型,所以我们可以将null和undefined赋值给任意类型
// 严格模式下null报错
// value=null //不会报错
// value=undefined // 不会报错
```

#### 5.null与undefined

- TS里,undefined和null两者各自有自己的类型分别叫做undefined和null.和void相似,它们的本身的类型用处不是很大
- 非严格模式下,可以把Null和undefined赋值给number类型的变量

```typescript
export default {}

// Typescript里,undefined和null两者各自有自己的类型分别叫做Undefined和null
// 和void相似,它们的本身的类型用处不是很大

let x :undefined = undefined
let y :null = null

let money: number = 100

// 非严格模式下,可以把null和undefined赋值给number类型的变量
money = y
money = x
```

#### 6.never与object

> never类型:
>
> 表示的是那些用不存在的值得类型
>
> never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
>
> 变量也可能是never类型,当它们被永不为真的类型保护所约束



> Object类型
>
> Object表示非原始类型,也就是除number,string,boolean,symbol,bull和undefined之外的类型
>
> 定义了一个只能保存对象的变量
>
> 我们后面更常用的是接口与类型别名

```typescript
// never类型
// never类型表示的那些永不存在的值的类型
// 例如:never类型是那些总是会抛出异常或根本就不会有返回值得函数表达式或箭头函数表达式的返回值类型
// 变量也可能是never类型,当它们被永不为真的类型保护所约束时
//注意点:never类型是任何类型的子类型,也可以赋值给任何类型;然而,没有类型是never的子类型或可以赋值给never类型(除了never本身之外)
// 即使 any也不可以赋值给never

//返回never的函数必须存在无法达到的重点
function error(message: string): never {
    throw new Error(message);
}

error('aaa')

//推断的返回值类型为never
function fail() {
    return error('something failed')
}

//返回never的函数必须存在无法达到的终点
function infiniteLoop() :never {
    while(true) {
        
    }
}

//Object类型
// 表示一个对象
// 定义了一个只能保存对象的变量
let goddess:Object

```

#### 7.枚举

- enum类型是对Javascript标准数据类型的一个补充.

``` typescript
//枚举用于表示固定的几个取值
// 例如:人的性别只能是男或者女
enum Gender{
    Male,
    Femal
}

//定义了一个名称叫做val的变量,这个变量中只能保存Male或者femal
let val:Gender
val = Gender.Male
val = Gender.Femal
//val = 'nan' //报错

// 注意点:TS中的枚举底层实现的本质其实是数值类型,所以赋值一个数值不会报错
val = 666 //不会报错
console.log(Gender.Male) // 0

// 注意点: TS中的枚举类型的取值,默认是从上至下从0开始递增的
// 虽然默认是从0开始递增的,但是我们也可以手动的指定枚举的取值的值
// 注意点:如果手动指定了前面枚举值的取值,那么后面枚举值的取值会根据前面的值类递增
enum Gender2{
    Male=5,
    Feaml
}
console.log(Gender2.Male) //5
console.log(Gender2.Femal) //6

// 注意点:如果手动指定了后面枚举值的取值,那么枚举值的取值不会收到影响
enum Gender3{
    Male,
    Feaml=10
}
console.log(Gender3.Male) //0
console.log(Gender3.feaml) //10

//注意点:我们可以同时修改多个枚举值的取值,如果同时修改了多个,那么修改的是什么最后就是什么
enum Gender4{
    Male = 100,
    Femal = 200
}

```

#### 8.bight和symbol