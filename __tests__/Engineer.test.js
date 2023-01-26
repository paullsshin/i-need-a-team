const { default: test } = require('node:test');
const Employee = require('../lib/Employee.js');

const employee = new Employee('Bobby', '1234', 'gibberish@mail.com');

test('testing to see if it will return the values that have been entered', () => {
    expect(employee.name).toBe('Bobby');
    expect(employee.id).toBe('1234');
    expect(employee.email).toBe('gibberish@mail.com');
});

test('testing to see if the name will return', () => {
    expect(employee.getName()).toBe('Bobby');
});

test('test if we can return the the ID', () => {
    expect(employee.getId()).toBe('1234');
});

test('test if we can return the email', () => {
    expect(employee.getEmail()).toBe('gibberish@mail.com');
});

test('test if we can return the role', () => {
    expect(employee.getRole()).toBe('Employee');
});