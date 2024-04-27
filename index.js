// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the project title?',
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
