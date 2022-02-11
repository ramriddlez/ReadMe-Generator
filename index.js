const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

const questions = [
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
      choices: ["Apache 2.0","MIT","GNU GPLv3", "The Perl License", "None"],
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
  ] 

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//         if (err) {
//           return console.log(err);
//         }
//         console.log("Success! Your README.md file has been generated")
//     });
// }
function init() {
    inquirer.prompt(questions)
    .then ((data) => {
        const response = generateMarkdown(data.questions);
        writeToFile("Generated_README.md",response);
        console.log("a README.md has been created successfully!!");
    })
}

init();
