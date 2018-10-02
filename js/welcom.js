import logo from './logo';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import levelArtistElement from './levelArtist';
import {renderGenreScreen} from './levelArtist';
import {initialState, levels} from './data/data';

export default (data) => {
  const welcomRulesDescription = `<h2 class="title main-title">${data.content.title}</h2>
  <p class="text main-text">
    ${data.content.rules}
  </p>`;

  const welcomElement = `<section class="main main--welcome">
    ${logo(data.logo.title)}
    <button class="main-play">${data.content.button}</button>
    ${welcomRulesDescription}
  </section>`;

  return getElementFromTemplate(welcomElement);
};

export const renderArtistScreen = () => {
  const playButton = document.querySelector(`.main-play`);
  playButton.onclick = () => renderScreen(levelArtistElement(levels[`level-0`]), renderGenreScreen);
}
