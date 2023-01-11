class Snake{
    snakeHead:HTMLElement
    snakeBodies:HTMLCollection
    constructor() {
        this.snakeHead = document.querySelector('#snake>div') as HTMLElement
        this.snakeBodies = document.getElementById('snake')!.getElementsByTagName('div')
    }
    get X(){
        return this.snakeHead.offsetLeft
    }
    get Y(){
        return this.snakeHead.offsetTop
    }
    set X(val){
        this.snakeHead.style.left = val + 'px'
    }
    set Y(val){
        this.snakeHead.style.top = val + 'px'
    }
}
export default Snake
