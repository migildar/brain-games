#!/usr/bin/env node

import getName from '../src/cli.js'
//import readlineSync from 'readline-sync'

console.log('Welcome to the Brain Games!');
const nameUser = getName();
console.log(`Hello, ${nameUser}!`);