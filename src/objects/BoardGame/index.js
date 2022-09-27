import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js'

function BoardGame(amoutCards){
    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon))
    const $htmlCards = $htmlCardsList.join('')

    return /*html*/`
      <section class="board-game">
      ${/*htmlContent*/ $htmlCards}
      ${/*htmlContent*/ $htmlCards}
      </section>
    `;

};

export default BoardGame;