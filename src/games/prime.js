import getRandomeNumber from '../utils.js';
import runGame from '../index.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const getRound = () => {
  const number = getRandomeNumber(0, 100);
  const question = String(number);
  const correctAnswer = String(isPrime(number) ? 'yes' : 'no');
  return { question, correctAnswer };
};

export default () => runGame(descriptionGame, getRound);
