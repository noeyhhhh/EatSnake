//引入其他类
import Snake from './Snake'
import Food from './Food'
import ScorePanel from "./ScorePanel";
class GameControl{
    snake:Snake
    food:Food
    scorepanel:ScorePanel
    direction:string = ''
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorepanel = new ScorePanel()
        this.init()
    }
    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
    }
    keyDownHandler(event:KeyboardEvent){
        this.direction = event.key
        console.log(this.direction)
    }
}
export default GameControl
