const { rejects } = require('assert');
const fs = require('fs');

const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('../README.md', fileContent, err => {
      if (err) {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        reject(err)
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return
      }
      // resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'README.md created!'
      });
    });
  });
};

module.exports = {writeFile}