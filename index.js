// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Welcome to the readMe generator! \n Please type in your project title (Make sure it matches the repo title): ',
    },
    {
    type: 'input',
    name: 'description',
    message: 'Please describe your project \n Not sure where to start? answer this questions.\n-What was your motivation?\n-Why did you build this project?\n-What problem does it solve?\n-What did you learn?\n',
    },
    {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project?',
    },
    {
    type: 'input',
    name: 'instructions',
    message: 'Provide instructions and examples for use:',
    },
    {
    type: 'input',
    name: 'contributions',
    message: 'List your collaborators:',
    },
    {
    type: "list",
    name: "license",
    message: "Please select a license applicable to this project:",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },
    {
    type: 'input',
    name: 'tests',
    message: 'Provide examples on how to test the project:',
    },
    {
    type: 'input',
    name: 'github',
    message: 'What is your gitHub username?',
    },
    {
    type: 'input',
    name: 'email',
    message: 'What is your eMail?',
    },
]

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}
  
  // Initializing app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./README.md", generateMarkdown({ ...responses }));
    });
}

init();