const renderDom = require('./helpers')

let dom;
let document;

describe('', () => {
    beforeEach(async () => {
        dom = await renderDom('index.html')
        document = await dom.window.document
    })

})
