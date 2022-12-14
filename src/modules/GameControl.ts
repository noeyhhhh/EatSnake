//引入其他类
import Snake from './Snake'
import Food from './Food'
import ScorePanel from "./ScorePanel";
class GameControl{
    snake:Snake
    food:Food
    scorepanel:ScorePanel
    direction:string = 'ArrowRight'
    isAlive = true
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorepanel = new ScorePanel()
        this.init()
    }
    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.run()
    }
    keyDownHandler(event:KeyboardEvent){
        this.direction = event.key
    }
    run(){
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction){
            case "ArrowUp":
                Y -= 10;
                break
            case "ArrowDown":
                Y += 10;
                break
            case "ArrowLeft":
                X -= 10;
                break
            case "ArrowRight":
                X += 10;
                break
        }
        this.checkEat(X,Y)
        try{
            this.snake.X = X
            this.snake.Y = Y
        }catch (error){
            // @ts-ignore 错误提示
            alert(error.message)
            this.isAlive = false
        }

            this.isAlive && setTimeout(this.run.bind(this),300-(this.scorepanel.level-1)*30)
    }
    checkEat(X:number,Y:number){
        if(X === this.food.X && Y === this.food.Y) {
            this.food.change()
            this.scorepanel.addScore()
            this.snake.addBody()
        }
    }

}
export default GameControl
