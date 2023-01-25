const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber
    }

    roomNumber() {
        return this.officeNumber
    }

    uHaveAJob() {
        return "Manager"
    }
}

module.exports = Manager