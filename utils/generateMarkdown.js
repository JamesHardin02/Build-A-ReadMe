// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeObject = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'Apache 2.0 License': '[![Apache 2.0 License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'No license': ''
  }
  return license ? badgeObject[license]: '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinkObject = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    ISC: '[ISC](https://opensource.org/licenses/ISC)',
    'Apache 2.0 License': '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)',
  }
  return licenseLinkObject[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'No license'){
    return `This project is licensed under the ${renderLicenseLink(license)} license`
  }else{
    return 'No license used for this project'
  }
  
}

function renderTableOfContents(confirmArr){
  const { confirmFeatures, features, confirmContribute, contribute} = confirmArr;
  if(confirmFeatures && confirmContribute){
    return `## Table Of Content
- [Project description](#description)
- [Usage](#usage)
- [Testing](#testing)
- [Installation](#installation)
- [Features](#features)
- [Contribute](#contribute)
- [Questions](#questions)
- [License](#license)`
  } else if(confirmFeatures && !confirmContribute){
    return `## Table Of Content
- [Project description](#description)
- [Usage](#usage)
- [Testing](#testing)
- [Installation](#installation)
- [Features](#features)
- [Questions](#questions)
- [License](#license)`
  } else if (!confirmFeatures && confirmContribute){
    return `## Table Of Content
- [Project description](#description)
- [Usage](#usage)
- [Testing](#testing)
- [Installation](#installation)
- [Contribute](#contribute)
- [Questions](#questions)
- [License](#license)`
  } else {
    return `## Table Of Content
- [Project description](#description)
- [Usage](#usage)
- [Testing](#testing)
- [Installation](#installation)
- [Questions](#questions)
- [License](#license)`
  }
}

function renderFeaturesSection(confirmArr){
  const { confirmFeatures, features} = confirmArr;
  if(confirmFeatures){
    return `## Features
${features}`
  }
  return``
}

function renderContributeSection(confirmArr){
  const { confirmFeatures, features, confirmContribute, contribute } = confirmArr;
  if(confirmContribute){
    return `## Contribute
${contribute}`
  }
  return``
}

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
