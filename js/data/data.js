const initialState = Object.freeze({
  level: `level-artist`,
  mins: `05`,
  secs: `00`,
  lives: 3
});
/*
const level = Object.freeze({
  title: `Кто исполняет эту песню?`,
  answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
});*/

const levels = Object.freeze({
  'level-artist': {
    title: `Кто исполняет эту песню?`,
    answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
  },
  'level-genre': {
    title: `Выберите инди-рок треки`,
    answers: new Set([`a-1`, `a-2`, `a-3`, `a-4`])
  }
});

export {initialState, levels};
