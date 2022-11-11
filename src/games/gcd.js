import getRandomeNumber from '../utils.js';
import runGame from '../index.js';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  if (y > x) return findGcd(y, x);
  if (!y) return x;
  return findGcd(y, x % y);
};

const getRound = () => {
  const number1 = getRandomeNumber(0, 100);
  const number2 = getRandomeNumber(0, 100);
  const correctAnswer = String(findGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return { question, correctAnswer };
};

export default () => runGame(descriptionGame, getRound);
