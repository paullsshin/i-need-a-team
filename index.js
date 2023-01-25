const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

let employees = [];
let manager = {};

const selectWorker = async () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'Worker',
            message: 'Who are you going to choose?',
            choices: ['Add Engineer', 'Add Intern', 'Add Manager', 'Move along now folks'],
        },
    ]);
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'ManagerName',
            message: 'What is the name of your manager?',
        },
        {
            type: 'input',
            name: 'ManagerId',
            message: 'What is your manager ID number?',
        },
        {
            type: 'input',
            name: 'ManagerEmail',
            message: 'What is a good email for your manager?',
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message: "What is your manager's office number?",
        },
    ])

    .then((managerData) => {
        manager = {
            ManagerName: managerData.ManagerName,
            ManagerId: managerData.ManagerId,
            ManagerEmail: managerData.ManagerEmail,
            OfficeNumber: managerData.OfficeNumber,
        };

        chooseYourWorker();
    });

    function chooseYourWorker() {
        selectWorker().then(async (data) => {
            if(data.choice === 'Add Engineer') {
                inquirer
                .prompt([
                    {
                        type: 
                    }
                ])
            }
        })
    }