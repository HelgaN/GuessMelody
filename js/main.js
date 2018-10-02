import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import welcomElement from './welcom';
import levelArtistElement from './levelArtist';
import {renderArtistScreen} from './welcom';
import header from './header';
import {welcomData} from './data/data';

renderScreen(welcomElement(welcomData), renderArtistScreen);


/*
const template = document.querySelector(`template`);
const elements = template.content.children;
let screens = [];

for(let el of elements) {
  console.log(el);
  if (el.classList.contains(`main`)) screens.push(el);
}*/
/*
const [welcom, levelGenre, levelArtist, victoryResult, defeatTimeOutResult, defeatEndedAttemptsResult] = screens;

let number = 0;
renderScreen(number);

document.onkeydown = (evt) => {
  if(evt.altKey && evt.key === `ArrowLeft` && number >= 0) {
    evt.preventDefault();
    renderScreen(number--);
  }
  (evt.altKey && evt.key === `ArrowRight` && number < screens.length - 1) ? renderScreen(number++) : false;
}
*/
