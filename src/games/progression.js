import getRandomeNumber from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'What number is missing in the progression?';

const generatingProgression = (length, start, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const number = start + step * i;
    progression.push(number);
  }
  return progression;
};

const runTask = () => {
  const maxLength = 10;
  const minLength = 5;
  const length = getRandomeNumber(minLength, maxLength);
  const start = getRandomeNumber(0, 100);
  const step = getRandomeNumber(2, 4);
  const progression = generatingProgression(length, start, step);
  const replacementSymbol = '..';
  const indexReplace = getRandomeNumber(0, length - 1);
  const correctAnswer = String(progression[indexReplace]);
  progression[indexReplace] = replacementSymbol;
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export default () => startGame(descriptionGame, runTask);
