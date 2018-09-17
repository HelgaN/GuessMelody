const renderScreen = (element) => {
  const main = document.querySelector(`.main`);
  main.innerHTML = ``;
  main.appendChild(element);
}

export default renderScreen;
