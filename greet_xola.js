// import greet from './greet.js'

// // call the function & print the result on the screen
// console.log(greet('Xola'))

import chalk from 'chalk';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)


// You can use a module using CommonJS like this - but focus on ES Modules.

// var chalk = require('chalk');
// //import the greet module that is in the current folder
// var greet = require('./greet');

// const styledMessage = chalk.bgGreen.black(greet('Xola'));
// console.log(styledMessage)