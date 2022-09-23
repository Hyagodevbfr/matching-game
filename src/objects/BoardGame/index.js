import './style.css';
// import CardGame from "../../components/CardGame";
import CardFrontBack from '../../components/CardFrontBack';

function BoardGame(amoutCards){
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amoutCards)

    console.log(`${$htmlContent}`);

    return /*html*/`
      <section class="board-game">
      ${$htmlContent}
      </section>
    `;

};

export default BoardGame;