const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
 
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
    },
    
    
  ])
  .then((data) => {
    console.log(data);
    let action = data.action

    if(action === 'View All Employees') {

    } else if (action === 'Add Employee') {

    } else if (action === 'Update Employee Role') {

    } else if (action === 'View All Roles') {

    } else if (action === 'Add Role') {

    } else if (action === 'View All Departments') {

    } else if (action === 'Add Department') {

    } else if (action === 'Quit') {
    
    } else {

    }
        
  });