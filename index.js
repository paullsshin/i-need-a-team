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

    this.memberPosition = "Manager";
  }

  memberInput() {
    if (this.memberPosition === "Manager") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "managersName",
            message: "What is the name of your manager?",
          },

          {
            type: "input",
            name: "managersID",
            message: "What is the ID of your manager?",
          },

          {
            type: "input",
            name: "managersEmail",
            message: "What is the email address of your manager?",
          },

          {
            type: "input",
            name: "managersOfficeNumber",
            message: "What is the office number of your manager?",
          },

          {
            type: "list",
            name: "pickAMember",
            message: "Choose your worker",
            choices: ["Engineer", "Intern", "I am happy with who I have"],
          },
        ])

        .then((managerSelector) => {
          this.memberPosition = managerSelector.pickAMember;
          const managerStats = new Manager(
            managerSelector.managersName,
            managerSelector.managersId,
            managerSelector.managersEmail,
            managerSelector.managersOfficeNumber
          );
          this.groupMembers.push(managerStats);
          this.memberInput();
        });
    } else if (this.memberPosition === "Engineer") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "engineersName",
            message: "What is the name of your Engineer?",
          },

          {
            type: "input",
            name: "engineersID",
            message: "What is the ID of your Engineer?",
          },

          {
            type: "input",
            name: "engineersEmail",
            message: "What is the email address of your engineer?",
          },

          {
            type: "input",
            name: "engineersGithub",
            message: "What is the Github for your Engineer?",
          },

          {
            type: "list",
            name: "pickAMember",
            message: "Choose your worker",
            choices: ["Engineer", "Intern", "I am happy with who I have"],
          },
        ])

        .then((engineerSelector) => {
          this.memberPosition = engineerSelector.pickAMember;
          const engineerStats = new Engineer(
            engineerSelector.engineersName,
            engineerSelector.engineersId,
            engineerSelector.engineersEmail,
            engineerSelector.engineersGithub
          );
          this.groupMembers.push(engineerStats);
          this.memberInput();
        });
    } else if (this.memberPosition === "Intern") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "internsName",
            message: "What is the name of your Intern?",
          },

          {
            type: "input",
            name: "internsID",
            message: "What is the ID of your Intern?",
          },

          {
            type: "input",
            name: "internsEmail",
            message: "What is the email address of your Intern?",
          },

          {
            type: "input",
            name: "internsSchool",
            message: "What school does your Intern attend?",
          },

          {
            type: "list",
            name: "pickAMember",
            message: "Choose your worker",
            choices: ["Engineer", "Intern", "I am happy with who I have"],
          },
        ])

        .then((internSelector) => {
          this.memberPosition = internSelector.pickAMember;
          const internStats = new Intern(
            internSelector.internsName,
            internSelector.internsId,
            internSelector.internsEmail,
            internSelector.internsSchool
          );
          this.groupMembers.push(internStats);
          this.memberInput();
        });
    } else {
      fs.writeFile("dist/index.html", createHtml(this.groupMembers), (error) =>
        error
          ? console.log(error)
          : console.log("An index.html was created inside of your dist folder")
      );
    }
  }
}

const group = new Group();
group.memberInput();
