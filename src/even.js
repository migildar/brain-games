import getAnswer from '../src/cli.js';

const getRandomeNumber = () => Math.floor(Math.random() * 100);

const informationOutput = (str) => console.log(str);

const greeting = () => {
    informationOutput('Welcome to the Brain Games!');
    const nameUser = getAnswer('May I have your name? ');
    informationOutput(`Hello, ${nameUser}!`);
    return nameUser;
};

const playGame = () => {
    const nameUser = greeting();
    informationOutput('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        const number = getRandomeNumber();
        informationOutput(`Question: ${number}`);
        const youAnswer = getAnswer('Your answer: ');

        if ((number % 2 === 0) && (youAnswer === 'yes') || ((number % 2 !== 0) && (youAnswer === 'no'))) {
            informationOutput('Correct!');
        } else {
            const oppositeAnswer = (youAnswer === 'yes' ? 'no' : 'yes');
            informationOutput(`'${youAnswer}' is wrong answer ;(. Correct answer was '${oppositeAnswer}'. /n Let's try again, ${nameUser}!`);
            return;
        }
    }
    informationOutput(`Congratulations, ${nameUser}!`);
};

export { greeting, playGame };
