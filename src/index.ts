import './style/index.less'
import Food from './modules/Food'
import ScorePanel from './modules/ScorePanel'


const food = new Food()
food.change()

const scorePanel = new ScorePanel(100,5)
for(let i=0; i<500; i++){
    scorePanel.addScore()
}
