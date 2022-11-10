import getRandomeNumber from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const runTask = () => {
  const number = getRandomeNumber(0, 100);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => startGame(descriptionGame, runTask);
