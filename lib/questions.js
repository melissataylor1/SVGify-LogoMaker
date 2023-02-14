const questions = [
    {
        type: 'input',
        name: 'logoName',
        message: 'Please enter text for SVG Logo (MAX 3 characters)',
      
      },
      {
        type: 'input',
        name: 'textColour',
        message: `Please enter text colour keyword or a hexadecimal number for the logo's test color`,
      },
      {
        type: 'input',
        name: 'logoColour',
        message: `Please enter a colour keyword or a hexadecimal number for the logo's background colour`,
      },
      {
        type: 'list',
        name: 'logoShape',
        message: `Please choose logo shape`,
        choices: ['triangle', 'circle', 'square'],
      },
    ]
    module.exports = questions;