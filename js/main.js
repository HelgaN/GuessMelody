const template = document.querySelector(`template`);
const elements = template.content.children;
let screens = [];

for(let el of elements) {
  console.log(el);
  if (el.classList.contains(`main`)) screens.push(el);
}
/*
const [welcom, levelGenre, levelArtist, victoryResult, defeatTimeOutResult, defeatEndedAttemptsResult] = screens;
*/
const renderScreen = (num) => {
  const main = document.querySelector(`.main`);
  main.innerHTML = ``;
  main.appendChild(screens[num]);
}

let number = 0;
renderScreen(number);

document.onkeydown = (evt) => {
  if(evt.altKey && evt.key === `ArrowLeft` && number >= 0) {
    evt.preventDefault();
    renderScreen(number--);
  }
  (evt.altKey && evt.key === `ArrowRight` && number < screens.length - 1) ? renderScreen(number++) : false;
}
