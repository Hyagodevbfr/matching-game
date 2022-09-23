import './style.css';

function CardGame(icon = 'alura-pixel', alt = 'Logo da Alura'){
    return /*html*/`
    <article id="card-game">
        <img src="src/images/${icon}.svg" alt="${alt}">
    </article>
    `
};

export default CardGame