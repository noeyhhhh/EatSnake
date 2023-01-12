class Snake{
    snakeEle:HTMLElement
    snakeHead:HTMLElement
    snakeBodies:HTMLCollection
    constructor() {
        this.snakeEle = document.getElementById('snake')!
        this.snakeHead = document.querySelector('#snake>div') as HTMLElement
        this.snakeBodies = this.snakeEle.getElementsByTagName('div')
    }
    get X(){
        return this.snakeHead.offsetLeft
    }
    get Y(){
        return this.snakeHead.offsetTop
    }
    set X(val){
        if(val<0 || val>290){
            throw new Error('失败!撞墙了')
        }
        this.moveBody()
        this.snakeHead.style.left = val + 'px'
    }
    set Y(val){
        if(val<0 || val>290){
            throw new Error('失败!撞墙了')
        }
        this.moveBody()
        this.snakeHead.style.top = val + 'px'
    }
    addBody(){
        let newDiv:HTMLElement = document.createElement('div')
        this.snakeEle.insertAdjacentElement('beforeend',newDiv)
    }
    moveBody(){
        for(let i = this.snakeBodies.length -1 ;i>0; i--){
            let X = (this.snakeBodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.snakeBodies[i-1] as HTMLElement).offsetTop;
            (this.snakeBodies[i] as HTMLElement).style.left = X + 'px';
            (this.snakeBodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
}
export default Snake
