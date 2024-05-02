// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
// TITLE
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide a project title');
        }
    },
// DESCRIPTION
    {
        type: 'input',
        name: 'description',
        message: 'Enter description of project:',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide a description');
        }
    },
// INSTALLATION
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions for this project:',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide installation instructions');
        }
    },
// USAGE
    {
        type: 'input',
        name: 'usage',
        message: 'How is this project used?',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide usage instructions');
        }
    },
// CREDITS
    {
        type: 'list',
        name: 'addCredits',
        message: 'Do you want to add credits for others?',
        default: 'Yes',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Enter credits for others',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide credits');
        },
        when: (answers) => {
            return answers.addCredits === 'Yes';
        }
    },
// LICENSE
    {
        type: 'list',
        message: 'What is the license for this project?',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'GNU GPL v3', 'CC0 1.0', 'Eclipse Public License 1.0'],
        default: 'MIT'
    },
// FEATURES
    {
        type: 'list',
        name: 'addFeatures',
        message: 'Do you want to add features list?',
        default: 'Yes',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'features',
        message: 'Enter features to list:',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide features');
        },
        when: (answers) => {
            return answers.addFeatures === 'Yes';
        }
    },
// HOW TO CONTRIBUTE
    {
        type: 'input',
        name: 'contribute',
        message: 'What are the contribution guidelines?',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide features');
        }
    },
// TESTS
    {
        type: 'list',
        name: 'addTests',
        message: 'Do you want to add testing instructions?',
        default: 'Yes',
        choices: ['Yes', 'No']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter testing instructions:',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide testing instructions');
        },
        when: (answers) => {
            return answers.addTests === 'Yes';
        }
    },
// BADGES
    {
        type: 'list',
        name: 'addBadges',
        message: 'Do you want to add any badges?',
        default: 'Yes',
        choices: ['Yes', 'No']
    },
    {
        type: 'checkbox',
        name: 'badges',
        message: 'Select badges to add:',
        choices: ['[placeholder 1]', '[placeholder 2]'],
        when: (answers) => {
            return answers.addTests === 'Yes';
        }
    },
//  TABLE OF CONTENTS
    {
        type: 'list',
        name: 'table-of-contents',
        message: 'Create a Table of Contents?',
        default: 'Yes',
        choices: ['Yes', 'No']
    },
// GITHUB USERNAME
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must enter GitHub username');
        }
    },
// EMAIL
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide email address');
        }
    },
// CONTACT
    {
        type: 'input',
        name: 'contact',
        message: 'How can a user contact you with questions?',
        validate: function (input) {
            return input ? true : console.error('\n\u{26A0} Error: Must provide contact instructions');
        }
    },
];

// function to write README file
function writeToFile(fileName, data) {

    const md = generateMarkdown(data);

    fs.writeFile(fileName, md, (error) => error ? console.log(error) : console.log('Successfully wrote README!'));
}

// function to initialize app
async function init() {

    // store prompt answers
    const answers = await inquirer.prompt(questions);

    // store readme title
    const readme = `${answers.title}.md`;

    // write readme
    writeToFile(readme, answers);
}

// Function call to initialize app
init();
