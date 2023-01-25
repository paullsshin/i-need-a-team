const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);

        this.github = github
    }

    youGotAHub() {
        return this.github
    }

    uHaveAJob() {
        return "Engineer"
    }
}

module.exports = Engineer