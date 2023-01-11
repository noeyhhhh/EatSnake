import Food from './food'
import scorePanel from './scorePanel'
import Snake from './snake'
import * as events from "events";
class GameControl{
    food:Food
    scorepanel:scorePanel
    snake:Snake
    direction:string = ''
    constructor() {
        this.food = new Food()
        this.scorepanel = new scorePanel()
        this.snake = new Snake()
        this.initGame()

    }
    initGame(){
        document.addEventListener('keydown',this.keyboardEvent.bind(this))
    }
    keyboardEvent(e:KeyboardEvent){
        this.direction = e.key
    }

}
export default GameControl
