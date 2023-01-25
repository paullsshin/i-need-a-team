class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    whoDis() {
        return this.name
    }

    canIHaveYoNumber() {
        return this.id
    }

    whatsYourAt() {
        return this.email
    }

    uHaveAJob() {
        return "Employee"
    }
}

module.exports = Employee