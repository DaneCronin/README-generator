// Required Packages
const fs = require('fs');
const inquirer = require('inquirer');

// Internal module to link to Generate Markdown.js
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for user input

const questions = () => {
    return inquirer.prompt([

    {
        type: 'input',
        message: "What is your GitHub username? (Required)",
        name: 'username',
        validate: usernameInput => {
            if (usernameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        
    },
    {
        type: 'input',
        message: 'What is your email address? (Required)',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: "Enter GitHub link to your repo (Required)",
        name: 'repo',
        validate: repoInput => {
            if (repoInput) {
              return true;
            } else {
              console.log('Please enter the GitHub link to your repo!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: "What is the title of your project? (Required)",
        name: 'title',
        default: 'Project Title',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please enter a title for your project!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description'
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'The Unlicense'],
        name: 'license'
    },
]);
};

// Function to write README file
function writeToFile(fileName, generateMarkdown) {
    const fileName = "README_output.md"
    fs.writeFile(fileName, generateMarkdown, err => err ? console.log(err) : console.log('README generated successfully!'));
}

//Function to initialize app
function init() {
    questions()
  .then(answers => console.log(answers))
  .then(writeToFile) 
  .catch(err => {
    console.log(err);
});
}

// Function call to initialize app
init();
