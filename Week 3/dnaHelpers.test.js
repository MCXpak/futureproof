const dnaHelpers = require('./dnaHelpers')

let dna = dnaHelpers.dna

describe('test for dna', () => {
    
    test('it exists', () => {
        expect(dna).toBeDefined();
    })

    test('it takes the argument "A" and returns "T"', () => {
        expect(dna("A")).toEqual("T");
    })

    test('it takes the argument "T" and returns "A"', () => {
        expect(dna("T")).toEqual("A");
    })

    test('it takes the argument "C" and returns "G"', () => {
        expect(dna("C")).toEqual("G");
    })

    test('it takes the argument "G" and returns "C"', () => {
        expect(dna("G")).toEqual("C");
    })

    test('it takes string "ATTGC" and returns "TAACG', () => {
        expect(dna("ATTGC")).toEqual("TAACG");
    })

})

