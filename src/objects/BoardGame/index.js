import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from './data.js'

function BoardGame(amoutCards){
  const FlipAndHideCards = ($cardsActive) => {
    $cardsActive.forEach((card) => card.classList.remove('-active'))
  }
  const swapPlayer = ($arrowDown) =>{
    const currentPlayer = $arrowDown.getAttribute('data-currentplayer');

    $arrowDown.setAttribute('data-currentPlayer', currentPlayer == 1 ? 2 : 1);
  }
  window.boardGame = {};
  window.boardGame.handleClick = () =>{
    const $boardGame = document.querySelector('.board-game');
    const $arrowDown = document.querySelector('.arrow-down');
    const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')

    if ($cardsActive.length == 2){
      setTimeout(() =>{
        
        FlipAndHideCards($cardsActive)
        swapPlayer($arrowDown)
      }, 1000);

      
    }
  }
    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon))
    const $htmlCards = $htmlCardsList.join('')

    return /*html*/`
      <section class="board-game" onclick="boardGame.handleClick()">
      ${/*htmlContent*/ $htmlCards}
      ${/*htmlContent*/ $htmlCards}
      </section>
    `;

};

export default BoardGame;