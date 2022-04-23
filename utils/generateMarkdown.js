// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = templateData => {
  const { title, description, installation, usage, license, ...confirmArray } = templateData;
  return `# ${title}

## Table Of Content
-[Project description](#Description)
-[Usage](#Usage)
-[Installation](#Installation)
-[License](#License)

## Description 
${description}

## Usage
${usage}

## Installation
${installation}

## license
${license}
`
};
