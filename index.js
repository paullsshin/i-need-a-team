const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

let employees = [];
let manager = {};

const chooseYourWorker = async () => {
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
            
        }
    ])