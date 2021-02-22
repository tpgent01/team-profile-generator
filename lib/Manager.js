const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super (name, id, title)
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager