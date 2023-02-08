// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = requuire('fs')
// TODO: Create an array of questions for user input
const questions = [];
// questions to ask user
  .prompt([
    // Title
    {
      type: 'input',
      message: 'What would you like to name your ReadMe?',
      title: 'title',
    },
    // Description
    {
      type: 'input',
      message: 'Give us a description.',
      name: 'description'
    },
    // table of contents type:
    {
      type: 'input',
      message: 'Tell us what you would like in your Table of Contents.',
      name: 'table of contents'
    },
    // installation type: input
    {
      type: 'input',
      message: 'How to Install.',
      name: 'install'
    },
    // usage type: input
    {
      type: 'input',
      message: 'How to Use.',
      name: 'usage'
    },
    // license type: list
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like to use?',
      choices: ['MIT', 'GNU General Public License v3.0', 'Apache License 2.0', 'The Unlicense' ]

    },
    // contributing type: input
    {
      type: 'input',
      message: 'List all Contributors',
      name: 'contributors'
    },
    // test type: input
    {
      type: 'input',
      message: 'How to Test.',
      name: 'test'
    },
    // questions
    {
      type: 'input',
      message: 'Questions?',
      name: 'questions'
    },
  ])
  .then((response) =>{

    console.log(response);

    fs.writeFile('response.txt', JSON.stringify (response, null,), (err) =>  err?console.log(err):console.log('Success'))
    
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// npm init 
// install inquirer
// node video 2 hour mark 2 activities start at 17