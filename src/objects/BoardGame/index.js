import './style.css';
import CardGame from "../../components/CardGame";

function BoardGame(amoutCards){
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amoutCards)

    console.log(`${$htmlContent}`);

    return `
      <section class="board-game">
      ${$htmlContent}
      </section>
    `;

};

export default BoardGame;