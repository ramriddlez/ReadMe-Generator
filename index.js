const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
  inquirer.prompt([
    {
      // Title
      type: 'input',
      message: 'What is the title for your project?',
      name: 'title',
    },
    {
      // Description
      type: 'input',
      message: 'Add a description for your project:',
      name: 'description',
    },
    {
      // How to install
      type: 'input',
      message: 'Provide your installation instructions:',
      name: 'install',
    },
    {
      // Usage
      type: 'input',
      message: 'Provide instructions and examples for use',
      name: 'usage',
    },
    {
        // Contribution 
        type: 'input',
        message: 'Add your contribution guidelines:',
        name: "contribution",
    },
    {
        // Tests 
        type: 'input',
        message: 'Add your test instructions:',
        name: "test",
      },
    {
      // License
      type: 'list',
      message: 'Select your license:',
      choices: ["Apache 2.0","MIT","GNU GPLv3", "MIT", "None"],
      name: 'license',
    },
    {
      // Asks for github profile 
      type: 'input',
      message: 'Enter Github username:',
      name: "github",
    },
    {
      // Asks for email address 
      type: 'input',
      message: 'Enter email address:',
      name: "email",
    },
  ])
]  
  .then((data) =>
   
 
  fs.writeFile ('text.txt', JSON.stringify(data), (err) => {
      err ? console.log(err) : console.log('Success!')
  }
));
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
