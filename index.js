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
        // {
    //     type: 'input select checkbox confirm password expand editor rawlist '
    //     name: 'for variable'
    //     message:
    //     default:
    //     choices: 'for select type'
    //     validate: 
    //     when: 'add function to only ask the question under certain conditions'
    // },
        // {
    //     type: 'input select checkbox confirm password expand editor rawlist '
    //     name: 'for variable'
    //     message:
    //     default:
    //     choices: 'for select type'
    //     validate: 
    //     when: 'add function to only ask the question under certain conditions'
    // },
        // {
    //     type: 'input select checkbox confirm password expand editor rawlist '
    //     name: 'for variable'
    //     message:
    //     default:
    //     choices: 'for select type'
    //     validate: 
    //     when: 'add function to only ask the question under certain conditions'
    // },
    {
        type: 'list',
        message: 'What is the license for this project?',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'GNU GPL v3', 'CC0 1.0', 'Eclipse Public License 1.0'],
        default: 'MIT'
    },
    // 'What are the contribution guidelines?',
    // 'What are the testing instructions?',
    // 'Enter all questions:',
    // 'What is your github username?',
    // 'What is your email address?'

//  TABLE OF CONTENTS PROMPT - keep ToC questions last!!!!
    {
        type: 'list',
        name: 'table-of-contents',
        message: 'Create a Table of Contents?',
        choices: ['Yes', 'No'],
        default: 'Yes',
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
