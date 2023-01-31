const Engineer = require('../lib/Engineer');

describe('Engineer testing', () => {
    describe('Instance testing', () => {
        it('Should try to return the instance of the Engineer', () => {

            const engineer = new Engineer('Bobby', '001', 'bobby1@hotmail.com', 'Bobbysgithub');

            expect(engineer instanceof Engineer).toEqual(true);
        });
    });
    // testing the Engineer information
    describe('Engineer Name Testing', () => {
        it('Should return the given Engineer name', () => {
            const engineer = new Engineer('Bobby', '001', 'bobby1@hotmail.com', 'Bobbysgithub');

            expect(engineer.getName()).toEqual('Bobby');
        });
    });
    describe('Engineer ID Testing', () => {
        it('Should return the given Engineer ID number', () => {
            const engineer = new Engineer('Bobby', '001', 'bobby1@hotmail.com', 'Bobbysgithub');
            
            expect(engineer.getID()).toEqual('001');
        });
    });
    describe('Engineer Email Testing', () => {
        it('Should return the given Engineer email address', () => {
            const engineer = new Engineer('Bobby', '001', 'bobby1@hotmail.com', 'Bobbysgithub');
            
            expect(engineer.getEmail()).toEqual('bobby1@hotmail.com', 'Bobbysgithub');
        });
    });
    describe('Engineer Github Testing', () => {
        it('Should return the given Engineer email address', () => {
            const engineer = new Engineer('Bobby', '001', 'bobby1@hotmail.com', 'Bobbysgithub');
            
            expect(engineer.getGithub()).toEqual('Bobbysgithub');
        });
    });
    describe('Engineer Role Testing', () => {
        it('Should return the given Engineer email address', () => {
            const engineer = new Engineer('Bobby', '001', 'bobby1@hotmail.com', 'Bobbysgithub');
            
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});