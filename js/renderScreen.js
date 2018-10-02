const renderScreen = (element, renderNextScreen) => {
  const app = document.querySelector(`.main`);
  app.innerHTML = ``;
  app.appendChild(element.cloneNode(true));
  renderNextScreen();
}

export default renderScreen;
