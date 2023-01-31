const Manager = require('../lib/Manager');

describe('Manager testing', () => {
    describe('Instance testing', () => {
        it('Should try to return the instance of the Manager', () => {

            const manager = new Manager('Bobby', '1', 'bobby1@hotmail.com', '425-123-1234');

            expect(manager instanceof Manager).toEqual(true);
        });
    });
    // testing the Manager information
    describe('Manager Name Testing', () => {
        it('Should return the given Manager name', () => {
            const manager = new Manager('Bobby', '1', 'bobby1@hotmail.com', '425-123-1234');

            expect(manager.getName()).toEqual('Bobby');
        });
    });
    describe('Manager ID Testing', () => {
        it('Should return the given Manager ID number', () => {
            const manager = new Manager('Bobby', '1', 'bobby1@hotmail.com', '425-123-1234');
            
            expect(manager.getID()).toEqual('1');
        });
    });
    describe('Manager Email Testing', () => {
        it('Should return the given Manager email address', () => {
            const manager = new Manager('Bobby', '1', 'bobby1@hotmail.com', '425-123-1234');
            
            expect(manager.getEmail()).toEqual('bobby1@hotmail.com', '425-123-1234');
        });
    });
    describe('Manager Office Number Testing', () => {
        it('Should return the given Manager email address', () => {
            const manager = new Manager('Bobby', '1', 'bobby1@hotmail.com', '425-123-1234');
            
            expect(manager.getOfficeNumber()).toEqual('425-123-1234');
        });
    });
    describe('Manager Role Testing', () => {
        it('Should return the given Manager email address', () => {
            const manager = new Manager('Bobby', '1', 'bobby1@hotmail.com', '425-123-1234');
            
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});