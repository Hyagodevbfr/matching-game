import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore";
import vsPlayer from "../../components/vsPlayer";
import './style.css'

function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
     ${PlayerName('Player1')}
     ${PlayerScore(1)}
     ${vsPlayer()}
     ${PlayerScore()}
     ${PlayerName('Player2')}
     </header>`;
};

export default ScoreBoard;