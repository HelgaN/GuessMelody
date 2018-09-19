const renderScreen = (element, renderNextScreen) => {
  const app = document.querySelector(`.app`);
  app.innerHTML = ``;
  app.appendChild(element.cloneNode(true));
  renderNextScreen();
}

export default renderScreen;
