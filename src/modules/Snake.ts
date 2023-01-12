class Snake{
    head:HTMLElement
    bodies:HTMLCollection
    element:HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!
        // 蛇头
        this.head = document.querySelector('#snake > div') as HTMLElement
        // 整个蛇元素
        this.bodies = this.element.getElementsByTagName('div')
    }
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(val){
        if(this.X === val){
            return
        }
        if(val < 0 || val > 290){
            throw new Error('蛇撞墙了')
        }
        // 当蛇在水平线上掉头时禁止
        // 通过判断身体的一号位和头的横向坐标是否一致
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === val ){
            if(val > this.X){
                val = this.X - 10
            }else{
                val = this.X + 10
            }
        }
        this.moveBody()
        this.head.style.left = val + 'px'
        this.checkBodyAndHead()
    }
    set Y(val){
        if(this.Y === val){
            return
        }
        if(val < 0 || val > 290){
            throw new Error('蛇撞墙了')
        }
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === val ){
            if(val > this.Y){
                val = this.Y - 10
            }else{
                val = this.Y + 10
            }
        }
        this.moveBody()
        this.head.style.top = val + 'px'
        this.checkBodyAndHead()
    }

    // 蛇身体增加一格方法
    addBody(){
        console.log('添加一格身体')
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }
    moveBody(){
        for(let i = this.bodies.length - 1; i>0; i--){
            let X = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let Y = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = X + 'px';
            (this.bodies[i] as HTMLElement).style.top = Y + 'px';
        }
    }
    checkBodyAndHead(){
        console.log('move')
        for(let i = 1; i<this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement
            if( this.X === bd.offsetLeft && this.Y === bd.offsetTop ){
                throw new Error('撞到身体了')
            }
        }
}
}
export default Snake

