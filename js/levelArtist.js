import getElementFromTemplate from './getElementFromTemplate';
import renderScreen from './renderScreen';
import levelGenreElement from './levelGenre';
import {renderResultScreen} from './levelGenre';
import headerTemplate from './header';
import {levels} from './data/data';

export default (level) => {
  const levelArtistElement = `<section class="main main--level main--level-artist">
    ${headerTemplate}
    <div class="main-wrap">
      <h2 class="title main-title">${level.title}</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio></audio>
          <button class="player-control player-control--pause"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
      ${[...level.answers.entries()].map(([answer], i) => `
        <div class="main-answer-wrapper">
          <input class="main-answer-r" type="radio" id="answer-${i+1}" name="answer" value="val-${i+1}"/>
          <label class="main-answer" for="answer-${i+1}">
            <img class="main-answer-preview" src="http://placehold.it/134x134"
                 alt="${answer}" width="134" height="134">
            ${answer}
          </label>
        </div>
      `).join(``)}

      </form>
    </div>
  </section>`;

  return getElementFromTemplate(levelArtistElement);
};

export const renderGenreScreen = () => {
  const answers = document.querySelectorAll(`.main-answer`);
  answers.forEach((answer)=> {
    answer.onclick = () => renderScreen(levelGenreElement(levels[`level-1`]), renderResultScreen);
  });
}
