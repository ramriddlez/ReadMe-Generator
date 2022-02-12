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
    choices: ["Apache 2.0", "MIT", "GNU GPLv3", "The Perl License", "None"],
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



//write function on writing to the generateMardown file
function writeToFile(generateMarkdown, data) {
  fs.writeFile(generateMarkdown, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!")
  });
}

//initialize the entire document -- ask questions, init writeToFile function then use generatemarkdown data to write a new file 
function init() {
  inquirer.prompt(questions)
    .then((data) => {
     
      const response = generateMarkdown(data);
      const filename = `${data.title}_README.md`;
      writeToFile(filename, response)
    })
}

init();
