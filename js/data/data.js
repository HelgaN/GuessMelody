/*
const level = Object.freeze({
  title: `Кто исполняет эту песню?`,
  answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
});*/

const levels = Object.freeze([
  {
    type: `level-artist`,
    title: `Кто исполняет эту песню?`,
    question: {
      src: `sound/Donors-LetterBox.mp3`,
      answer: `Пелагея`
    },
    answers: new Set([`Пелагея`, `Краснознаменная дивизия имени моей бабушки`, `Lorde`])
  },

  {
    type: `level-genre`,
    title: `Выберите инди-рок треки`,
    question: {
      src: [`sound/MotelRock-HanuDixit.mp3`, `sound/MountainDub-GunnarOlsen.mp3`, `sound/NoCulture-SilentPartner.mp3`, `sound/YouAreMyRainbow-UnicornHeads.mp3`],
      answers: [false, true, true, false]
    },
    answers: new Set([`a-1`, `a-2`, `a-3`, `a-4`])
  }
]);

const initialState = Object.freeze({
  level: levels[0],
  mins: `05`,
  secs: `00`,
  lives: 3,
  questions: [`level-0`, `level-1`],
  stats: Array(2).fill(`unknown`)
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
};

const lossData = {
  logo: {
    title: `Угадай мелодию`
  },

  content: {
    title: `Увы и ах!`,
    main: `Время вышло!<br>Вы не успели отгадать все мелодии`,
    button: `Попробовать ещё раз`
  }
};

// условные статичные данные

const victoryData = {
  logo: {
    title: `Угадай мелодию`
  },

  content: {
    title: `Вы настоящий меломан!`,
    main: `За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки`,
    comparison: `Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков`,
    button: `Сыграть ещё раз`
  }
};

const setLevel = (game, levelsArray, num) => {
  if (num < 0) {
    throw new RangeError(`can't set a negative level number`);
  }
  if (num > 9) {
    throw new RangeError(`can't set more than 10 questions`);
  }
  const newGame = Object.assign({}, game);
  newGame.level = levelsArray[num];
  return newGame;
};

export {initialState, levels, welcomData, lossData, victoryData, setLevel};
