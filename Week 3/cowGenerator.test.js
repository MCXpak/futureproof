const {getCowName, getCowColour, sayCowPhrase} = require('./cowGenerator.js')

describe('cow maker test', () => {

    let cow = {name: "Mary", colour: "Red", phrase: "MooooOOOOooo!"}
    describe('test getting cow name', () => {
        test('getCowName is a function', () => {
            expect(getCowName).toBeDefined();
        })

        test('function should greet with cow name',  () => {
            expect(getCowName(cow)).toEqual(`Hi, my name is ${cow.name}!`)
        })
    })

    describe('test getting cow colour', () => {
        test('getCowColour is a function', () => {
            expect(getCowColour).toBeDefined();
        })
    })

    describe('test getting cow phrase', () => {
        test('sayCowPhrase is a function', () => {
            expect(sayCowPhrase).toBeDefined();
        })
    
    })
})
