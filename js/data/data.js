const initialState = Object.freeze({
  level: ``,
  mins: `05`,
  secs: `00`,
  lives: 3
});

const level = Object.freeze({
  title: `Кто исполняет эту песню?`,
  answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
});

export {initialState, level};
