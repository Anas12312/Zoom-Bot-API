const acceptCookies = require('./Services/acceptCookies')
const auth = require('./Services/auth')
const init = require('./Services/init')
const search = require('./Services/search')

require('dotenv').config()


async function run() {
    
    const { browser, page } = await init()
    
    // join(browser, page)

    await auth(browser, page)
    
}
run()