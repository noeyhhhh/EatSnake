import Food from './food'
import scorePanel from './scorePanel'
import Snake from './snake'
import * as events from "events";
class GameControl{
    food:Food
    scorepanel:scorePanel
    snake:Snake
    direction:string = ''
    isAlive = true
    constructor() {
        this.food = new Food()
        this.scorepanel = new scorePanel()
        this.snake = new Snake()
        this.initGame()

    }
    initGame(){
        this.food.foodChange()
        document.addEventListener('keydown',this.keyboardEvent.bind(this))
        this.run()
    }
    keyboardEvent(e:KeyboardEvent){
        this.direction = e.key
    }
    run(){
        let X = this.snake.X
        let Y = this.snake.Y
        switch(this.direction){
            case "ArrowRight":
                X += 10
                break
            case "ArrowLeft":
                X -= 10
                break
            case "ArrowUp":
                Y -= 10
                break
            case "ArrowDown":
                Y += 10
                break
        }
        this.checkEatFood(X,Y)
        try{
            this.snake.X = X
            this.snake.Y =Y
        } catch (e:any){
            alert(e.message)
            this.isAlive = false
        }
        this.isAlive && setTimeout(this.run.bind(this),300-(this.scorepanel.level)*10)
    }
    checkEatFood(X:number,Y:number){
        if(X === this.food.foodX && Y === this.food.foodY){
            this.scorepanel.addScore()
            this.food.foodChange()
            this.snake.addBody()
        }
    }
}
export default GameControl
