const initialState = Object.freeze({
  level: `level-0`,
  mins: `05`,
  secs: `00`,
  lives: 3,
  questions: [`level-0`, `level-1`],
  stats: Array(2).fill(`unknown`)
});

/*
const level = Object.freeze({
  title: `Кто исполняет эту песню?`,
  answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
});*/

const levels = Object.freeze({
  'level-0': {
    type: `level-artist`,
    title: `Кто исполняет эту песню?`,
    question: {
      src: `sound/track1.mp3`,
      answer: `Пелагея`
    },
    answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
  },

  'level-1': {
    type: `level-genre`,
    title: `Выберите инди-рок треки`,
    question: {
      src: [`sound/track1.mp3`, `sound/track2.mp3`, `sound/track3.mp3`, `sound/track4.mp3`],
      answers: [false, true, true, false]
    },
    answers: new Set([`a-1`, `a-2`, `a-3`, `a-4`])
  }
});

const welcomData = {
  logo: {
    title: `Угадай мелодию`
  },

  content: {
    title: `Правила игры`,
    rules: `Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
    Ошибиться можно 3 раза.<br>
    Удачи!`,
    button: `Начать игру`
  }

}

export {initialState, levels, welcomData, logoData};
