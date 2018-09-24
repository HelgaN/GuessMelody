import logo from './logo';
import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import welcomElement from './welcom';
import {renderArtistScreen} from './welcom';

const resultVictoryElement = getElementFromTemplate(`<section class="main main--result">
  ${logo}
  <h2 class="title">Вы настоящий меломан!</h2>
  <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
    <br>вы&nbsp;набрали 12 баллов (8 быстрых)
    <br>совершив 3 ошибки</div>
  <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
  <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
</section>`);

export default resultVictoryElement;

export const renderWelcomScreen = () => {
  const button = document.querySelector(`.main-replay`);
  console.log(button);
  button.onclick = () => renderScreen(welcomElement, renderArtistScreen);
}
