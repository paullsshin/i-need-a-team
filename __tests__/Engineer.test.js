const Engineer = require('../lib/Engineer');

test('Engineer testing', () => {
    test('Instance testing', () => {
        it('Should try to return the instance of the Engineer', () => {

            const engineer = new Engineer('Bobby', '1', 'bobby1@hotmail.com', 'Bobbysgithub');

            expect(engineer instanceof Engineer).toEqual(true);
        });
    });
    // testing the Engineer information
    test('Engineer Name Testing', () => {
        it('Should return the given Engineer name', () => {
            const engineer = new Engineer('Bobby', '1', 'bobby1@hotmail.com', 'Bobbysgithub');

            expect(engineer.getName()).toEqual('Bobby');
        });
    });
    test('Engineer ID Testing', () => {
        it('Should return the given Engineer ID number', () => {
            const engineer = new Engineer('Bobby', '1', 'bobby1@hotmail.com', 'Bobbysgithub');
            
            expect(engineer.getID()).toEqual('1');
        });
    });
    test('Engineer Email Testing', () => {
        it('Should return the given Engineer email address', () => {
            const engineer = new Engineer('Bobby', '1', 'bobby1@hotmail.com', 'Bobbysgithub');
            
            expect(engineer.getEmail()).toEqual('bobby1@hotmail.com', 'Bobbysgithub');
        });
    });
    test('Engineer Github Testing', () => {
        it('Should return the given Engineer email address', () => {
            const engineer = new Engineer('Bobby', '1', 'bobby1@hotmail.com', 'Bobbysgithub');
            
            expect(engineer.getGithub()).toEqual('Bobbysgithub');
        });
    });
    test('Engineer Role Testing', () => {
        it('Should return the given Engineer email address', () => {
            const engineer = new Engineer('Bobby', '1', 'bobby1@hotmail.com', 'Bobbysgithub');
            
            expect(engineer.getRole()).toEqual('Engineer');
        });
    });
});