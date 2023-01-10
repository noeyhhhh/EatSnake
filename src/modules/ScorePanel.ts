// 分数类
class ScorePanel{
    score = 0;
    level = 1;
    // 最大等级
    maxLevel:number;
    upScore: number;
    // 分数和等级所在的元素,在构造函数中进行初始化
    scoreEle:HTMLElement
    levelEle:HTMLElement
    constructor(maxLevel:number = 10,upScore = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    addScore(){
        this.scoreEle.innerHTML = ++this.score + ''
        if(this.score % this.upScore === 0){
            this.levelUp()
        }
    }
    levelUp(){
        if( this.level<this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ''
        }
    }
}
export default ScorePanel
