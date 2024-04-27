// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: function (input, answers) {
            input ? true : console.log('Error: Must provide a project title');
        }
    },
    {
        type: 'input select checkbox confirm password expand editor rawlist '
        name: 'for variable'
        message:
        default:
        choices: 'for select type'
        validate: 
        when: 'add function to only ask the question under certain conditions'
    },
    {
        type: 'input select checkbox confirm password expand editor rawlist '
        name: 'for variable'
        message:
        default:
        choices: 'for select type'
        validate: 
        when: 'add function to only ask the question under certain conditions'
    },
    {
        type: 'input select checkbox confirm password expand editor rawlist '
        name: 'for variable'
        message:
        default:
        choices: 'for select type'
        validate: 
        when: 'add function to only ask the question under certain conditions'
    },
    'What is the project description?',
    'What is the Table of Contents?',
    'What are the installation requirements?',
    'What is the use case for this application?',
    {
        type: 'list',
        message: 'What is the license for this project?',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'GNU GPL v3', 'CC0 1.0', 'Eclipse Public License 1.0'],
        default: 'MIT'
    },
    'What are the contribution guidelines?',
    'What are the testing instructions?',
    'Enter all questions:',
    'What is your github username?',
    'What is your email address?'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
