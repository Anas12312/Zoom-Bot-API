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
}
run()