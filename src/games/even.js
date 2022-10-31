import getRandomeNumber from '../utils.js';
import { basisOfGames } from '../common.js';

const descriptionGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

export default () => basisOfGames(descriptionGame, () => {
  const number = getRandomeNumber(0, 100);
  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
});
