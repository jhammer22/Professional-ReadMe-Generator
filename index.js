
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [];

  inquirer.prompt([
    
    {
      type: 'input',
      message: 'What would you like to name your ReadMe?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give us a description.',
      name: 'description'
    },
    {
      type: 'input',
      message: 'Tell us what you would like in your Table of Contents.',
      name: 'table of contents'
    },
    {
      type: 'input',
      message: 'How to Install.',
      name: 'install'
    },
    {
      type: 'input',
      message: 'How to Use.',
      name: 'usage'
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'What license would you like to use?',
      choices: ['MIT', 'GNU General Public License v3.0', 'Apache License 2.0', 'The Unlicense' ]

    },
    {
      type: 'input',
      message: 'List all Contributors',
      name: 'contributors'
    },
    {
      type: 'input',
      message: 'How to Test.',
      name: 'test'
    },
    {
      type: 'input',
      message: 'Questions?',
      name: 'questions'
    },
  ]).then((response) =>{

    console.log(response);

    fs.writeFile('response.md', generateMarkdown (response), (err) =>  err?console.log(err):console.log('Success'))
    
});
