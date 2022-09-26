 import CardGame from "../CardGame";
 import './style.css';

 
 function CardFrontBack() {
  window.cardfrontback = {}
  window.cardfrontback.handleclick = (event) =>{
    const $origin = event.target 
    const $CardFrontBack = $origin.closest('.card-front-back')

    $CardFrontBack.classList.toggle('-active')
  }
  return /*html */`
    <article class="card-front-back" onclick="cardfrontback.handleclick(event)">
      <div class="card -front">
          ${CardGame()}
      </div>
      <div class="card -back">
          ${CardGame("logo-javascript", 'Logo do JavaScript')}
      </div>
    </article>
  `
 };

 export default CardFrontBack;