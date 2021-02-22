const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'text',
        name: 'size',
        
    }

])
.then(({ name }) => {
    this.employee = new Employee(name);
});