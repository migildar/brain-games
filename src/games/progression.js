import getRandomeNumber from '../utils.js';
import runGame from '../index.js';

const descriptionGame = 'What number is missing in the progression?';

const generate = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }
  return progression;
};

const getRound = () => {
  const maxLength = 10;
  const minLength = 5;
  const length = getRandomeNumber(minLength, maxLength);
  const start = getRandomeNumber(0, 100);
  const step = getRandomeNumber(2, 4);
  const progression = generate(length, start, step);
  const replacementSymbol = '..';
  const hiddenIndex = getRandomeNumber(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = replacementSymbol;
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => runGame(descriptionGame, getRound);
