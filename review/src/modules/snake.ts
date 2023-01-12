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
        if(this.X === val ){
            return
        }
        if(this.snakeBodies[1] && (this.snakeBodies[1] as HTMLElement).offsetLeft === val) {
            if (val > this.X) {
                val = this.X - 10
            } else {
                val = this.X + 10
            }
        }
        if(val<0 || val>290){
            throw new Error('失败!撞墙了')
        }
        this.moveBody()
        this.snakeHead.style.left = val + 'px'
        this.checkBodyAndHead()
    }
    set Y(val){
        if(this.Y === val){
            return
        }
        if(this.snakeBodies[1] && (this.snakeBodies[1] as HTMLElement).offsetTop === val){
            if(val > this.Y){
                val = this.Y - 10
            }else{
                val = this.Y + 10
            }
        }
        if(val<0 || val>290){
            throw new Error('失败!撞墙了')
        }
        this.moveBody()
        this.snakeHead.style.top = val + 'px'
        this.checkBodyAndHead()
    }
    addBody(){
        // let newDiv:HTMLElement = document.createElement('div')
        this.snakeEle.insertAdjacentHTML('beforeend','<div></div>')
    }
    moveBody(){
        for(let i = this.snakeBodies.length -1 ;i>0; i--){
            let X = (this.snakeBodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.snakeBodies[i-1] as HTMLElement).offsetTop;
            (this.snakeBodies[i] as HTMLElement).style.left = X + 'px';
            (this.snakeBodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    checkBodyAndHead(){
        for(let i = 1; i<this.snakeBodies.length; i++){
            let bd = this.snakeBodies[i] as HTMLElement
            if( this.X === bd.offsetLeft && this.Y === bd.offsetTop ){
                throw new Error('撞到身体了')
            }
        }
    }
}
export default Snake
