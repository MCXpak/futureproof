const calcHelpers = require('./calcHelpers');


describe('calculator helpers', () => {
    test('testing test', () => {
        expect(2+5).toEqual(7);
    });

    describe('multiplyBy3', () => {

        let multiplyBy3 = calcHelpers.multiplyBy3;

        test('it exists', () => {
            expect(multiplyBy3).toBeDefined();
        })

        test('it takes an argument and returns the value multiplied by 3', () => {
            expect(multiplyBy3(5)).toEqual(15);
        })
    })

    describe('addThese', () => {

        let addThese = calcHelpers.addThese;
        
        test('it exists', () => {
            expect(addThese).toBeDefined();
        })

        test('it takes two arguments and returns the sum', () => {
            expect(addThese(1,1)).toEqual(2);
        })
    })
})
