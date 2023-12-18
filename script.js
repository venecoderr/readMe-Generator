// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



const fs = require('fs')
const inquirer = require('inquirer')

function getSpecs () {
    inquirer
    .prompt([
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
    type: 'list',
    name: 'license',
    message: 'What license is your project under?',
    choices: ['GNU GPLv3', 'GNU GPL', 'MIT License', 'None']
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
    ])
    .then((response) => {
        fs.writeFile('readMe.md', fullReadMe , (err) => err ? console.log(err) : console.log('readMe created!'))
    })
}

getSpecs()
