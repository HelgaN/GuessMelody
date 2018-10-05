import logo from './logo';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import welcomElement from './welcom';
import {renderArtistScreen} from './welcom';
import {welcomData} from './data/data';

export default (data) => {
  const resultVictoryElement = `<section class="main main--result">
    ${logo(data.logo.title)}
    <h2 class="title">${data.content.title}</h2>
    <div class="main-stat">${data.content.main}</div>
    <span class="main-comparison">${data.content.comparison}</span>
    <span role="button" tabindex="0" class="main-replay">${data.content.button}</span>
  </section>`;

  return getElementFromTemplate(resultVictoryElement);
};

export const renderWelcomScreen = () => {
  const button = document.querySelector(`.main-replay`);
  button.onclick = () => renderScreen(welcomElement(welcomData), renderArtistScreen);
};
