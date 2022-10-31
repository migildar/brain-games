import readlineSync from 'readline-sync';

export default (questionText) => readlineSync.question(questionText);
