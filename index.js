const acceptCookies = require('./Services/acceptCookies')
const auth = require('./Services/auth')
const init = require('./Services/init')
const join = require('./Services/join')

require('dotenv').config()


async function run() {
    
    const { browser, page } = await init()

    join(browser, page, "https://us05web.zoom.us/j/81317376491?pwd=EmzFJWfS9JNLfqYP3bj9yBWecGr3SG.1")

    
    

    await auth(browser, page)
    await join(browser, page)

    
}
run()