const fizzbuzzHelpers = require('./fizzbuzzHelpers')

let fizzbuzz = fizzbuzzHelpers.fizzbuzz 

describe('test for fizzbuzz', () => {

    test('it exists', () => {
        expect(fizzbuzz).toBeDefined();
    })

    test('it takes an argument and returns "FizzBuzz" if the number is a multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).toEqual("FizzBuzz");
    })

    test('it takes an argument and returns "Fizz" if the number is a multiple of 3', () => {
        expect(fizzbuzz(3)).toEqual("Fizz");
    })

    test('it takes an argument and returns "Buzz" if the number is a multple of 5', () => {
        expect(fizzbuzz(5)).toEqual("Buzz");
    })

    test('it takes an argument and returns the argument if it is not a multple of 3 or 5', () => {
        expect(fizzbuzz(2)).toEqual(2)
    })

})
