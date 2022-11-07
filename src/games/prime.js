import getRandomeNumber from '../utils.js';
import { basisOfGames } from '../common.js';

const descriptionGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

export default () => basisOfGames(descriptionGame, () => {
  const number = getRandomeNumber(0, 100);
  const question = String(number);
  const answer = String(isPrime(number) ? 'yes' : 'no');
  return { question, answer };
});
