const {prompt} = require('inquirer');
const {questions, makeSVG} = require('./lib');

prompt(questions).then(makeSVG);