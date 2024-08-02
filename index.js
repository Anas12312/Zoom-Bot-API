const init = require('./Services/init')
const search = require('./Services/search')

require('dotenv').config()


async function run() {
    
    const { browser, page } = await init()
    
    join(browser, page)
    
}
run()