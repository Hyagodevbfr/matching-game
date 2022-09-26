import PlayerName from "../../components/PlayerName"
import vsPlayer from "../../components/vsPlayer";
import './style.css'

function ScoreBoard(){
    return /*html*/`
    <header class="score-board">
     ${PlayerName('Player1')}
     ${vsPlayer()}
     ${PlayerName('Player2')}
    </header>`;
};

export default ScoreBoard;