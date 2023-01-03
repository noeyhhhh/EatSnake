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
    score = 1;
    level = 0;
    // 最大等级
    maxLevel:number;
    // 分数和等级所在的元素,在构造函数中进行初始化
    scoreEle:HTMLElement
    levelEle:HTMLElement
    constructor(maxLevel:number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
    }
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''
    }
    levelUp(){
        if(this.maxLevel < 10){
            console.log(123)
            this.levelEle.innerHTML = ++this.level + ''
        }

    }
}

const food = new Food()
food.change()

const scorePanel = new ScorePanel()
scorePanel.addScore()
scorePanel.addScore()
scorePanel.levelUp()
scorePanel.levelUp()
