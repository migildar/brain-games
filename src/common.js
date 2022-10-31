import getAnswer from './cli.js';

const roundsCount = 3;

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const nameUser = getAnswer('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
  return nameUser;
};

const basisOfGames = (descriptionGame, task) => {
  const nameUser = greeting();
  console.log(descriptionGame);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = task();
    console.log(`Question: ${question}`);
    const userAnswer = getAnswer('Your answer: ');

    if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. /n Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${nameUser}!`);
};

export { greeting, basisOfGames };
