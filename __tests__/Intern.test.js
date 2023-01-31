const Intern = require('../lib/Intern');

describe('Intern testing', () => {
    describe('Instance testing', () => {
        it('Should try to return the instance of the Intern', () => {

            const intern = new Intern('Bobby', '1', 'bobby1@hotmail.com', 'South Harmon Institute of Technology');

            expect(intern instanceof Intern).toEqual(true);
        });
    });
    // testing the Intern information
    describe('Intern Name Testing', () => {
        it('Should return the given Intern name', () => {
            const intern = new Intern('Bobby', '1', 'bobby1@hotmail.com', 'South Harmon Institute of Technology');

            expect(intern.getName()).toEqual('Bobby');
        });
    });
    describe('Intern ID Testing', () => {
        it('Should return the given Intern ID number', () => {
            const intern = new Intern('Bobby', '1', 'bobby1@hotmail.com', 'South Harmon Institute of Technology');
            
            expect(intern.getID()).toEqual('1');
        });
    });
    describe('Intern Email Testing', () => {
        it('Should return the given Intern email address', () => {
            const intern = new Intern('Bobby', '1', 'bobby1@hotmail.com', 'South Harmon Institute of Technology');
            
            expect(Intern.getEmail()).toEqual('bobby1@hotmail.com', 'South Harmon Institute of Technology');
        });
    });
    describe('Intern School Testing', () => {
        it('Should return the given Intern email address', () => {
            const intern = new Intern('Bobby', '1', 'bobby1@hotmail.com', 'South Harmon Institute of Technology');
            
            expect(intern.getSchool()).toEqual('South Harmon Institute of Technology');
        });
    });
    describe('Intern Role Testing', () => {
        it('Should return the given Intern email address', () => {
            const intern = new Intern('Bobby', '1', 'bobby1@hotmail.com', 'South Harmon Institute of Technology');
            
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});