const inquirer = require('inquirer');
const fs = require('fs');
const mysql = require('mysql2');


const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'RootyRoot',
        database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
);



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
        let pinkSlip

        if (action === 'View All Employees') {
            db.query('SELECT * FROM employees', function (err, results) {
                console.table(results);
            });
            pinkSlip = 1
            console.log(pinkSlip);
            return pinkSlip

        } else if (action === 'Add Employee') {

            pinkSlip = 2
            console.log(pinkSlip);
            return pinkSlip

        } else if (action === 'Update Employee Role') {

            pinkSlip = 3
            console.log(pinkSlip);
            return pinkSlip

        } else if (action === 'View All Roles') {
            pinkSlip = 4

            db.query('SELECT * FROM Roles', function (err, results) {
                console.table(results);
            });
            console.log(pinkSlip);

            return pinkSlip

        } else if (action === 'Add Role') {

            pinkSlip = 5
            console.log(pinkSlip);
            return pinkSlip

        } else if (action === 'View All Departments') {

            db.query('SELECT * FROM Departments', function (err, results) {
                console.table(results);
            });

            pinkSlip = 6
            console.log(pinkSlip);
            return pinkSlip

        } else if (action === 'Add Department') {

            pinkSlip = 7
            console.log(pinkSlip);
            return pinkSlip

        } else if (action === 'Quit') {

            pinkSlip = 8
            console.log(pinkSlip);
            return pinkSlip

        } else {

            pinkSlip = -1
            console.log(pinkSlip);
            return 

        }

        //   });

        UI.log.write(pinkSlip, (error) =>
            error ? console.error(error) : console.log('sucess')
        );
    });