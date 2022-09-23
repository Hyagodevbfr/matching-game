import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';

// import BoardGame from './src/objects/BoardGame';
import ScoreBoard from './src/objects/ScoreBoard';
import BoardGame from './src/objects/BoardGame';





const $body = document.querySelector('#root');

$body.insertAdjacentHTML(
  'beforeend', 
  `
  ${ScoreBoard()}
  ${BoardGame(2)}
  `
);