import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import resultVictoryElement from './resultVictory';
import resultLossElement from './resultLoss';
import {renderWelcomScreen} from './resultVictory';
import welcomElement from './welcom';
import headerTemplate from './header';

const levelGenreElement = getElementFromTemplate(`  <section class="main main--level main--level-genre">
    ${headerTemplate}

    <div class="main-wrap">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`);

  export default levelGenreElement;

  export const renderResultScreen = () => {
    const answers = document.querySelectorAll(`input[name='answer']`);
    const button = document.querySelector(`.genre-answer-send`);
    button.disabled = true;

    answers.forEach((answer)=> {
      answer.onchange = () => (answer.checked === true) ? button.disabled = false: button.disabled = true;
      const numRandom = Math.random();
      let screen;
      (numRandom > 0.5) ? screen = resultVictoryElement : screen = resultLossElement;
      button.onclick = () => renderScreen(screen, renderWelcomScreen);
    });
  }
