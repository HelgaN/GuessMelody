import logo from './logo';
import getElementFromTemplate from './getElementFromTemplate';

export default (data) => {
  const resultLossElement = `<section class="main main--result">
    ${logo(data.logo.title)}
    <h2 class="title">${data.content.title}</h2>
    <div class="main-stat">${data.content.main}</div>
    <span role="button" tabindex="0" class="main-replay">${data.content.button}</span>
  </section>`;

  return getElementFromTemplate(resultLossElement);
};
