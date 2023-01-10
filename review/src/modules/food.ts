class Food{
    element:HTMLElement
    constructor() {
        this.element = document.getElementById('food')!
    }
    get foodX(){
        return this.element.offsetLeft
    }
    get foodY(){
        return this.element.offsetTop
    }
    foodChange(){
        const X = Math.round(Math.random()*29)*10
        const Y = Math.round(Math.random()*29)*10
        this.element.style.left = X + 'px'
        this.element.style.top = Y + 'px'
    }
}
export default Food
