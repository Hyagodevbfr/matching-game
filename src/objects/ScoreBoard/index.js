import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore";
import vsPlayer from "../../components/vsPlayer";
import './style.css'

function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
     ${ArrowDown(2)}
     ${PlayerName('Player1')}
     ${PlayerScore(3)}
     ${vsPlayer()}
     ${PlayerScore(2)}
     ${PlayerName('Player2')}
     </header>`;
};

export default ScoreBoard;