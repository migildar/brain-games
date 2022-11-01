import { basisOfGames } from '../common.js';
import getRandomeNumber from '../utils.js';

const descriptionGame = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = undefined;
  }
  return result;
};

export default () => basisOfGames(descriptionGame, () => {
  const number1 = getRandomeNumber(0, 100);
  const number2 = getRandomeNumber(0, 100);
  const operators = ['+', '-', '*'];
  const getRandomOperator = operators[getRandomeNumber(0, operators.length - 1)];
  const answer = String(calculate(number1, number2, getRandomOperator));
  const question = `${number1} ${getRandomOperator} ${number2}`;
  return { question, answer };
});
