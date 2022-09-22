import CardGame from "../components/CardGame";

function BoardGame(amoutCards){
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amoutCards)

    console.log(`${$htmlBoardGame}`);

    return $htmlBoardGame;

};

export default BoardGame;