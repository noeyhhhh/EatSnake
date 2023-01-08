//引入其他类
import Snake from './Snake'
import Food from './Food'
import ScorePanel from "./ScorePanel";
class GameControl{
    snake:Snake
    food:Food
    scorepanel:ScorePanel
    direction:string = 'Right'
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
            case "Up":
                Y -= 10;
                break
            case "ArrowDown":
            case "Down":
                Y += 10;
                break
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break
            case "ArrowRight":
            case "Right":
                X += 10;
                break
        }
        this.snake.X = X
        this.snake.Y = Y
        // setTimeout(this.run.bind(this),300-(this.scorepanel.level)*30)
    }

}
export default GameControl
