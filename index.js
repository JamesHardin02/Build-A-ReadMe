// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { writeToFile } = require('./utils/fsModule');
// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the title of your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide steps required to install the project (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('You need to enter steps required for instllation!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions on how to use the project (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('You need to enter instructions on how to use the project!');
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using for this project?',
      choices: ['MIT', 
      'Apache license 2.0', 'artistic-2.0', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'confirm',
      name: 'confirmFeatures',
      message: 'Would you like to features of your project?',
      default: false
    },
    {
      type: 'input',
      name: 'features',
      message: 'Provide a description of features your project has',
      when: ({ confirmFeatures }) => confirmFeatures
    },
    {
      type: 'confirm',
      name: 'confirmContribute',
      message: 'Would you like others to contribute to your project?',
      default: false
    },
    {
      type: 'input',
      name: 'features',
      message: 'Provide instructions on how to contribute',
      when: ({ confirmContribute }) => confirmContribute
    },
  ])
}
const mockData = {
  title: 'Build-A-ReadMe',
  description: 'Build a readme.md using the command line',
  installation: 'use npm install to install all dependants',
  usage: "In your terminal navigate to the project root folder and run node index.js and you'll be given prompts in the command line to fill in your README.md",
  license: 'MIT',
  confirmFeatures: true,
  features: 'submit a pull request and the Build-A-Read me team will review the submission',        
  confirmContribute: true
};

// TODO: Create a function to initialize app
promptUser()
  .then(answers => {
    return generateMarkdown(answers);
  })
  .then(markdown => {
    return writeToFile(markdown);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
  })
  .catch(err =>{
    console.log(err);
  });
