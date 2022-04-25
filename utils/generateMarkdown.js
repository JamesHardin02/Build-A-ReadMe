// returns the licenses argued from the badgeObject. If no license then an empty string is returned
function renderLicenseBadge(license) {
  const badgeObject = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'Apache 2.0 License': '[![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'No license': ''
  }
  return license ? badgeObject[license]: '';
}

// returns a link from the licenseLinkObject to the the corresponding license argument
function renderLicenseLink(license) {
  const licenseLinkObject = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    ISC: '[ISC](https://opensource.org/licenses/ISC)',
    'Apache 2.0 License': '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
  }
  return licenseLinkObject[license];
}

// If there is a license choosen then the 'licensed under' statement is returned
function renderLicenseSection(license) {
  if(license !== 'No license'){
    return `This project is licensed under the ${renderLicenseLink(license)} license`
  }else{
    return 'No license used for this project'
  }
}

// checks if the optional sections of the readme were desired and returns a table of contents template
// that includes the optional sections desired
function renderTableOfContents(confirmArr){
  const { confirmFeatures, features, confirmContribute, contribute} = confirmArr;
  if(confirmFeatures && confirmContribute){
    return `## Table Of Content
- [Description](#description)
- [Usage](#usage)
- [Testing](#testing)
- [Installation](#installation)
- [Features](#features)
- [Contribute](#contribute)
- [Questions](#questions)
- [License](#license)`
  } else if(confirmFeatures && !confirmContribute){
    return `## Table Of Content
- [Description](#description)
- [Usage](#usage)
- [Testing](#testing)
- [Installation](#installation)
- [Features](#features)
- [Questions](#questions)
- [License](#license)`
  } else if (!confirmFeatures && confirmContribute){
    return `## Table Of Content
- [Description](#description)
- [Usage](#usage)
- [Testing](#testing)
- [Installation](#installation)
- [Contribute](#contribute)
- [Questions](#questions)
- [License](#license)`
  } else {
    return `## Table Of Content
- [Description](#description)
- [Usage](#usage)
- [Testing](#testing)
- [Installation](#installation)
- [Questions](#questions)
- [License](#license)`
  }
}

// checks if the optional features section is desired. If true returns the features section template
function renderFeaturesSection(confirmArr){
  const { confirmFeatures, features} = confirmArr;
  if(confirmFeatures){
    return `## Features
${features}`
  }
  return``
}

// checks if the optional contribute section is desired. If true returns the contribute section template
function renderContributeSection(confirmArr){
  const { confirmFeatures, features, confirmContribute, contribute } = confirmArr;
  if(confirmContribute){
    return `## Contribute
${contribute}`
  }
  return``
}

// This module exports a readme template dynamically filled out using the inquirer object returned from promptUser()
module.exports = templateData => {
  const { title, description, usage, testing, installation, github, email, questionInstructions, license, ...confirmArr } = templateData;
  return `# ${title}
${renderLicenseBadge(license)}

${renderTableOfContents(confirmArr)}

## Description 
${description}

## Usage
${usage}

## Testing
${testing}

## Installation
${installation}

${renderFeaturesSection(confirmArr)} 

${renderContributeSection(confirmArr)}

## Questions
${questionInstructions}
- GitHub Username: [${github}](https://github.com/${github})
- Email Address: ${email}

## license
${renderLicenseSection(license)}
`
};
