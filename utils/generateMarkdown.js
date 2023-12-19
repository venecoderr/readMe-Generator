//Returns a license badge
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }else{
    return ""
  }
}

//Returns the license link
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `- [License](#license)`
  }else{
    return ''
  }
}

//Returns the license section of README
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License\n\nThis project is under the ${license} license`
  }else{
    return ''
  }
}

//Generates markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)
- [Credits](#credits)
${renderLicenseLink(data.license)}
## Installation
${data.install}
## Usage
//Don't forget to add your screenshots with [alt text](./screenshot.jpeg)
${data.instructions}
## Credits
${data.contributions}
## Tests
${data.tests}
## Questions
For questions contact me at [Github](https://github.com/${data.github}) or [Email me](mailto:${data.email})
${renderLicenseSection(data.license)}`
}

module.exports = generateMarkdown
