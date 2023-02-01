const fs = require("fs");
const inquirer = require("inquirer");
const createHtml = require("./src/createHtml");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

console.log("Please select the people you would like to have in your group!");

class Group {
  constructor() {
    this.groupMembers = [];

    this.memberRole = "Manager";
  }

  askQuestions() {
    if (this.memberRole === "Manager") {
      inquirer.prompt([
        {
          type: "input",
          name: "managersName",
          message: "What is the name of your manager?",
          validate: (managersName) => {
            if (managersName.length > 0) {
              return true;
            } else {
              console.log("Enter a valid name for the manager");
              return false;
            }
          },
        },
      ]);
    }
  }
}
