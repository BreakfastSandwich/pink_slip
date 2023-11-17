const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


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

function allEmployees() {

    db.query('SELECT * FROM employees', function (err, results) {
        console.table(results);
        begin()
    });

};

function addEmployee() {

    inquirer
        .prompt([
            {
                type: 'text',
                name: 'firstName',
                message: "What is the Employee's first name?",

            },
            {
                type: 'text',
                name: 'lastName',
                message: "What is the Employee's last name?",

            },
            {
                type: 'text',
                name: 'roleId',
                message: "What is the Employee's role ID?",

            },
            {
                type: 'text',
                name: 'managerId',
                message: "What is the Employee's manager ID?",

            },
        ])

        .then((date) => {

            db.query('INSERT INTO employees', function (err, results) {




                console.table(results);
                begin()
            });

        })
};

function updateEmployee() {
    inquirer
    .prompt([
        {
            type: 'text',
            name: 'firstName',
            message: "What is the Employee's first name?",

        },
        {
            type: 'text',
            name: 'lastName',
            message: "What is the Employee's last name?",

        },
        {
            type: 'text',
            name: 'roleId',
            message: "What is the Employee's NEW role ID?",

        },
        
    ])

    .then((date) => {

        db.query('find one and update employees', function (err, results) {




            console.table(results);
            begin()
        });

    })
}

function allRoles() {

    db.query('SELECT * FROM roles', function (err, results) {
        console.table(results);
        begin()
    });

};



function addRole() {

    inquirer
        .prompt([
            {
                type: 'text',
                name: 'title',
                message: "What is the Title of this Role?",

            },
            {
                type: 'text',
                name: 'departmentId',
                message: "What is the Department ID for this Role?",

            },
            {
                type: 'text',
                name: 'salary',
                message: "What is the Salary for this Role?",

            },
            {
                type: 'text',
                name: 'managerId',
                message: "What is the Employee's manager ID?",

            },
        ])

        .then((date) => {

            db.query('INSERT INTO roles', function (err, results) {




                console.table(results);
                begin()
            });

        })
};

function alldepartments() {

    db.query('SELECT * FROM departments', function (err, results) {
        console.table(results);
        begin()
    });

};

function addDepartment() {

    inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the Name of this Department?",

            },
        ])

        .then((date) => {

            db.query('INSERT INTO departments', function (err, results) {




                console.table(results);
                begin()
            });

        })
};


function begin() {
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

                allEmployees()

                return

            } else if (action === 'Add Employee') {

                addEmployee()

                return

            } else if (action === 'Update Employee Role') {

                updateEmployee()

                return 

            } else if (action === 'View All Roles') {

                allRoles()

                return 

            } else if (action === 'Add Role') {

                addRole()

                return 

            } else if (action === 'View All Departments') {

                alldepartments()

                return 

            } else if (action === 'Add Department') {

                addDepartment()

                return 

            } else if (action === 'Quit') {

                
                console.log('Have a Great Day!');
                return 

            } else {

                
                console.log("Well, this is awkward... I'm not sure how you got here..");
                return

            }


        });
}

begin()