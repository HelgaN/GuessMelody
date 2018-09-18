import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import levelArtistElement from './levelArtist';
import {renderGenreScreen} from './levelArtist';

const welcomElement = getElementFromTemplate(`<section class="main main--welcome">
  <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
  <button class="main-play">Начать игру</button>
  <h2 class="title main-title">Правила игры</h2>
  <p class="text main-text">
    Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!
  </p>
</section>`);

export default welcomElement;

export const renderArtistScreen = () => {
  const playButton = document.querySelector(`.main-play`);
  playButton.onclick = () => renderScreen(levelArtistElement, renderGenreScreen);
}
