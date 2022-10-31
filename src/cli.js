import readlineSync from 'readline-sync';

const getAnswer = (questionText) => readlineSync.question(questionText);
export default getAnswer;
