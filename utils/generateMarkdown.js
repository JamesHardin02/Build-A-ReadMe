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

module.exports = templateData => {
  const { title, description, installation, usage, license, ...confirmArray } = templateData;
  return `# ${title}
${renderLicenseBadge(license)}

## Table Of Content
- [Project description](#Description)
- [Usage](#Usage)
- [Installation](#Installation)
- [License](#License)

## Description 
${description}

## Usage
${usage}

## Installation
${installation}

## license
${renderLicenseSection(license)}
`
};
