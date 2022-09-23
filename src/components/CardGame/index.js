import './style.css';

function CardGame(icon = 'alura-pixel', alt = 'Logo da Alura'){
    return /*html*/`
    <article id="CardGame">
        <img src="src/images/${icon}.svg" alt="${alt}">
    </article>
    `
};

export default CardGame