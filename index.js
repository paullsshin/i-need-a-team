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
      inquirer
        .prompt([
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

          {
            type: "input",
            name: "managersID",
            message: "What is the ID of your manager?",
            validate: (managersId) => {
              if (managersId.length > 0) {
                return true;
              } else {
                console.log("Enter a valid ID for the manager");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "managersEmail",
            message: "What is the email address of your manager?",
            validate: (managersEmail) => {
              if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  managersEmail
                )
              ) {
                return true;
              } else {
                console.log("Enter a valid email address for the manager");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "managersOfficeNumber",
            message: "What is the office number of your manager?",
            validate: (managersOfficeNumber) => {
              if (managersOfficeNumber.length > 0) {
                return true;
              } else {
                console.log("Enter a valid phone number for the manager");
                return false;
              }
            },
          },

          {
            type: "list",
            name: "pickAMember",
            message: "Choose your worker",
            choices: ["Engineer", "Intern", "I am happy with who I have"],
          },
        ])

        .then((managerSelector) => {
          this.memberRole = managerSelector.pickAMember;
          const managerStats = new Manager(
            managerSelector.managersName,
            managerSelector.managersId,
            managerSelector.managersEmail,
            managerSelector.managersOfficeNumber
          );
          this.groupMembers.push(managerStats);
          this.askQuestions();
        });
    } else if (this.memberRole === "Engineer") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "engineersName",
            message: "What is the name of your Engineer?",
            validate: (engineersName) => {
              if (engineersName.length > 0) {
                return true;
              } else {
                console.log("Enter a valid name for the engineer");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "engineersID",
            message: "What is the ID of your Engineer?",
            validate: (engineersId) => {
              if (parseInt(engineersId) > 0) {
                return true;
              } else {
                console.log("Enter a valid ID for the Engineer");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "engineersEmail",
            message: "What is the email address of your engineer?",
            validate: (engineersEmail) => {
              if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  engineersEmail
                )
              ) {
                return true;
              } else {
                console.log("Enter a valid email address for the Engineer");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "engineersGithub",
            message: "What is the Github for your Engineer?",
            validate: (engineersGithub) => {
              if (engineersGithub.length > 0) {
                return true;
              } else {
                console.log("Enter a valid Github for the Engineer");
                return false;
              }
            },
          },

          {
            type: "list",
            name: "pickAMember",
            message: "Choose your worker",
            choices: ["Engineer", "Intern", "I am happy with who I have"],
          },
        ])

        .then((engineerSelector) => {
          this.memberRole = engineerSelector.pickAMember;
          const engineerStats = new Engineer(
            engineerSelector.engineersName,
            engineerSelector.engineersId,
            engineerSelector.engineersEmail,
            engineerSelector.engineersGithub
          );
          this.groupMembers.push(engineerStats);
          this.askQuestions();
        });
    } else if (this.memberRole === "Intern") {
      inquirer
        .prompt([
          {
            type: "input",
            name: "internsName",
            message: "What is the name of your Intern?",
            validate: (internsName) => {
              if (internsName.length > 0) {
                return true;
              } else {
                console.log("Enter a valid name for the Intern");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "internsID",
            message: "What is the ID of your Intern?",
            validate: (internsId) => {
              if (parseInt(internsId) > 0) {
                return true;
              } else {
                console.log("Enter a valid ID for the Intern");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "internsEmail",
            message: "What is the email address of your Intern?",
            validate: (internsEmail) => {
              if (
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                  internsEmail
                )
              ) {
                return true;
              } else {
                console.log("Enter a valid email address for the Intern");
                return false;
              }
            },
          },

          {
            type: "input",
            name: "internsSchool",
            message: "What school does your Intern attend?",
            validate: (internsSchool) => {
              if (internsSchool.length > 0) {
                return true;
              } else {
                console.log("Enter a valid school name for your Intern");
                return false;
              }
            },
          },

          {
            type: "list",
            name: "pickAMember",
            message: "Choose your worker",
            choices: ["Engineer", "Intern", "I am happy with who I have"],
          },
        ])

        .then((internSelector) => {
          this.memberRole = internSelector.pickAMember;
          const internStats = new Intern(
            internSelector.internsName,
            internSelector.internsId,
            internSelector.internsEmail,
            internSelector.internsSchool
          );
          this.groupMembers.push(internStats);
          this.askQuestions();
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
group.askQuestions();
