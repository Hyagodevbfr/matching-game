import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import CardGame from "./src/components/CardGame";

const $body = document.querySelector('#root');
const $htmlCardGame = CardGame();

$body.insertAdjacentHTML('beforebegin', $htmlCardGame);