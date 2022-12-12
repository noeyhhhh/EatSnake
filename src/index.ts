import './style/index.less'
console.log(1111)
// food类
class Food{
    element:HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }
    get X(){
        return this.element.offsetLeft
    }
    get Y(){
        return this.element.offsetTop
    }
    change(){
        const left = Math.round(Math.random()*29)*10
        const top = Math.round(Math.random()*29)*10
        this.element.style.left = left+'px'
        this.element.style.top = top+'px'
    }
}
// 分数类
class ScorePanel{
    score = 0;
    level = 0;
}
const food = new Food()
console.log(food.X,food.Y)
food.change()
console.log(food.X,food.Y)
