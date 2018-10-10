const renderScreen = (element, renderNextScreen) => {
  const main = document.querySelector(`.main`);
  main.innerHTML = ``;
  main.appendChild(element.cloneNode(true));
  renderNextScreen();
};

export default renderScreen;
