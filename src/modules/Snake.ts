class Snake{
    head:HTMLElement
    bodies:HTMLCollection
    element:HTMLElement
    constructor() {
        this.element = document.getElementById('snake')!
        // 蛇头
        this.head = document.querySelector('#snake>div') as HTMLElement
        // 整个蛇元素
        this.bodies = this.element.getElementsByTagName('div')!
    }
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    set X(val){
        this.head.style.left = val + 'px'
    }
    set Y(val){
        this.head.style.top = val + 'px'
    }

    // 蛇身体增加一格方法
    addBody(){
        this.element.insertAdjacentHTML('beforeend',"<div></div>")
    }
}
export default Snake

