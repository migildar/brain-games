import getRandomeNumber from '../utils.js';
import startGame from '../index.js';

const descriptionGame = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return undefined;
  }
};

const runTask = () => {
  const number1 = getRandomeNumber(0, 100);
  const number2 = getRandomeNumber(0, 100);
  const operators = ['+', '-', '*'];
  const getRandomOperator = operators[getRandomeNumber(0, operators.length - 1)];
  const correctAnswer = String(calculate(number1, number2, getRandomOperator));
  const question = `${number1} ${getRandomOperator} ${number2}`;
  return { question, correctAnswer };
};

export default () => startGame(descriptionGame, runTask);
