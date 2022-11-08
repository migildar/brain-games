import getRandomeNumber from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const runTask = () => {
  const number1 = getRandomeNumber(0, 100);
  const number2 = getRandomeNumber(0, 100);
  const answer = String(findGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return { question, answer };
};

export default () => startGame(descriptionGame, runTask);
