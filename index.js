const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
{
  type: 'input',
  name: 'username',
  message: 'Please enter your GitHub username'
},
{
  type: 'input',
  name: 'title',
  message: 'Enter your project title'
},
{
  type: 'input',
  name: 'desc',
  message: 'Enter your project description'
},
{
  type: 'input',
  name: 'table',
  message: 'Enter a table of contents'
},
{
  type: 'input',
  name: 'install',
  message: 'Enter installation instructions'
},
{
  type: 'input',
  name: 'usage',
  message: 'Enter the usage for your project'
},
{
  type: 'input',
  name: 'license',
  message: 'Enter the project license'
},
{
  type: 'input',
  name: 'contributing',
  message: 'Enter who contributed to the project'
},
{
  type: 'input',
  name: 'tests',
  message: 'Enter tests for the project'
}])
.then(({username, title, desc, table, install, usage, license, contributing, tests}) => {
  generateMd(username, title, desc, table, install, usage, license, contributing, tests)
})

const generateMd = (username, title, desc, table, install, usage, license, contributing, tests) => {
  fs.writeFile('README.md', `
  # ${title}

**Description**
${desc}

**Table of Contents**
${table}

**Installation**
${install}

**Usage**
${usage}

**License**
${license}

**Contributing**
${contributing}

**Tests**
${tests}

* ${username}
* ${username}
  `, error => error ? console.error(error) : console.log('success'))
}