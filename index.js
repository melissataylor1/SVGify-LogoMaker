
const {prompt} = require('inquirer');
const {questions} = require('./lib/questions');
const {makeSVG} = require('./lib/makeSVG');

prompt(questions).then(makeSVG);