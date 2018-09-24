import logo from './logo';
import getElementFromTemplate from './getElementFromTemplate';

const resultLossElement = getElementFromTemplate(`<section class="main main--result">
  ${logo}
  <h2 class="title">Увы и ах!</h2>
  <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
  <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
</section>`);

export default resultLossElement;
