const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')

async function init() {
    puppeteer.use(StealthPlugin())
    const browser = await puppeteer.launch({
        timeout: 50_000,
        headless: false,
        // userDataDir: '/tmp',
        // userDataDir: process.env.CHROME_PATH,
        args: [
            // "--profile-directory=Profile 3",
            "--proxy-server=103.195.65.209:8080"
        ],
        defaultViewport: false
    })

    const page = await browser.newPage()
    
    return {
        browser,
        page
    }
}

module.exports = init