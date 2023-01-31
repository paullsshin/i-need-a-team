const Employee = require('../lib/Employee');

describe('Employee testing', () => {
    describe('Instance testing', () => {
        it('Should try to return the instance of the employee', () => {

            const employee = new Employee('Bobby', '1', 'bobby1@hotmail.com');

            expect(employee instanceof Employee).toEqual(true);
        });
    });
    // testing the employee information
    describe('Employee Name Testing', () => {
        it('Should return the given employee name', () => {
            const employee = new Employee('Bobby', '1', 'bobby1@hotmail.com');

            expect(employee.getName()).toEqual('Bobby');
        });
    });
    describe('Employee ID Testing', () => {
        it('Should return the given employee ID number', () => {
            const employee = new Employee('Bobby', '1', 'bobby1@hotmail.com');
            
            expect(employee.getID()).toEqual('1');
        });
    });
    describe('Employee Email Testing', () => {
        it('Should return the given employee email address', () => {
            const employee = new Employee('Bobby', '1', 'bobby1@hotmail.com');
            
            expect(employee.getEmail()).toEqual('bobby1@hotmail.com');
        });
    });
    describe('Employee Role Testing', () => {
        it('Should return the given employee email address', () => {
            const employee = new Employee('Bobby', '1', 'bobby1@hotmail.com');
            
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});