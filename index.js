const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")

//Array of questions for user input
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
    choices: ["MIT", "APACHE2.0", "GPL-3.0", "Unlicense", "none"],
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

// Writes the file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}
 
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

// Initializing app
function init() {
    inquirer.prompt(questions).then((responses) => {          
        writeToFile("./Generated/README.md", generateMarkdown({ ...responses }))
        console.log('Writing your readMe file...')
        sleep(1500).then(() => { console.log('readMe saved!')})      
    })
}

init()