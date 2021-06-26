

describe('helloTest', () => {
    
    let expected = '';
    let notExpected = '';
    let match = null;

    beforeEach(() => {
        expected = 'helloTest';
        notExpected = 'helloTest12';   
        match = new RegExp(/^hello/);
    })

    it('helloTest is equal to helloTest', () => {
        expect('helloTest').toBe(expected);
    });

    it('helloTest is not equal to helloTest123', () => {
        expect('helloTest').not.toBe(notExpected);
    });

    it('helloTest statrs with hello', () => {
        expect('helloTest').toMatch(match);
    });


});