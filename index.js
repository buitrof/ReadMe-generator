const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([{
  type: 'input',
  name: 'username',
  message: 'Please enter your GitHub username'
}])
.then(response => {
  console.log(response)
})