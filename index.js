const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// let employees = [];
// let manager = {};

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
                        type: 'input',
                        name: 'name',
                        message: 'What is the name of the Engineer?',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the email of the engineer?',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the ID of the engineer?',
                    },
                    {
                        type: 'input',
                        name: 'git',
                        message: "What is the engineer's Github?",
                    },
                ])
                .then ((engineerData) => {
                    const engineer = {
                        name: engineerData.name,
                        role: 'Engineer',
                        email: engineerData.email,
                        id: engineerData.id,
                        github: engineerData.git,
                    };
                    employees.push(engineer);
                    chooseYourWorker();
                });
            } else if (data.choice === 'Add Intern') {
                inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the name of the Intern?',
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the email of the Intern?',
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the ID of the Intern?',
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "What school did the Intern go to?",
                    },
                ])
                .then(internData) {
                    const intern = {
                        name: intern.name,
                        role: 'Intern',
                        email: intern.email,
                        id: intern.id,
                        school: intern.school,
                    };
                    employees.push(intern);
                    chooseYourWorker();
                };
            } else {
                const html = generateHTML(manager, employee);
                const filePath = path.join(__dirname, 'dist', 'index.html');
                fs.writeFileSync(filepath, html);
                console.log('Team was built');
            }
        })
    };