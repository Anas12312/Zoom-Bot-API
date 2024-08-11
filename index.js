const acceptCookies = require('./Services/acceptCookies')
const auth = require('./Services/auth')
const init = require('./Services/init')
const join = require('./Services/join')
const waitForJoining = require('./Services/waitForJoining')

require('dotenv').config()


async function run() {
    
    const { browser, page } = await init()
    const joined = await join(browser, page, "https://us04web.zoom.us/j/75651662994?pwd=465OSdMtuteYH2f4bNU4u8i9ViOfpZ.1")
    if(joined) {
        console.log("Agent joined successfully!")
        waitForJoining()
    }

    join(browser, page, "https://us05web.zoom.us/j/81317376491?pwd=EmzFJWfS9JNLfqYP3bj9yBWecGr3SG.1")

    
    

    await auth(browser, page)
    await join(browser, page)

    
}
run()