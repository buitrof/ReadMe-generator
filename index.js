const inquirer = require('inquirer')
const fs = require('fs')
const axios = require('axios')

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
  axios.get(`https://api.github.com/users/buitrof`)
    .then(({ data }) => {
      let picture = data.avatar_url
      let email = data.email
      if (email === null) {
        email = 'no email available'
      }
      generateMd(username, title, desc, install, usage, license, contributing, tests, picture, email)
    })
})
.catch(e => console.error(e))

const generateMd = (username, title, desc, install, usage, license, contributing, tests, picture, email) => {
  fs.writeFile('README.md', `
# ${title}

**Description** <br />
${desc}

**Table of Contents** <br />
1. Installation
2. Usage
3. License
4. Contributing
5. Tests

**Installation** <br />
${install}

**Usage** <br />
${usage}

**License** <br />
${license}

**Contributing** <br />
${contributing}

**Tests** <br />
${tests}

![GitHub avatar](${picture})
* ${email}
  `, error => error ? console.error(error) : console.log('success'))
}