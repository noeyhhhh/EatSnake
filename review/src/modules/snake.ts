class Snake{
    snakeHead:HTMLElement
    snakeBodies:HTMLCollection
    constructor() {
        this.snakeHead = document.querySelector('#snake>div') as HTMLElement
        this.snakeBodies = document.getElementById('snake')!.getElementsByTagName('div')
    }
}
