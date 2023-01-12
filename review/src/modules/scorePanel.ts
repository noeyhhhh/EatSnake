class scorePanel{
    score:number = 0
    level:number = 1
    scoreEle : HTMLElement
    levelEle: HTMLElement
    levelScore:number
    maxLevel:number
    constructor( levelScore:number = 2, maxLevel:number = 10) {
        this.scoreEle = document.getElementById('score')!
        this.levelEle = document.getElementById('level')!
        this.levelScore = levelScore
        this.maxLevel = maxLevel
    }
    addScore(){
        this.score++
        this.scoreEle.innerHTML = this.score + ''
        if( this.score % this.levelScore === 0 ){
            this.levelUp()
        }
    }
    levelUp(){
        if(this.level <= this.maxLevel){
            this.level++
            this.levelEle.innerHTML = this.level + ''
        }
    }
}
export default scorePanel
