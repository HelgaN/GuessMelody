import logo from './logo';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import levelArtistElement from './levelArtist';
import {renderGenreScreen} from './levelArtist';
import {initialState, levels} from './data/data';

const welcomRulesDescription = `<h2 class="title main-title">Правила игры</h2>
<p class="text main-text">
  Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
  Ошибиться можно 3 раза.<br>
  Удачи!
</p>`;

const welcomElement = getElementFromTemplate(`<section class="main main--welcome">
  ${logo}
  <button class="main-play">Начать игру</button>
  ${welcomRulesDescription}
</section>`);

export default welcomElement;

export const renderArtistScreen = () => {
  const playButton = document.querySelector(`.main-play`);
  playButton.onclick = () => renderScreen(levelArtistElement(levels[initialState.level]), renderGenreScreen);
}
