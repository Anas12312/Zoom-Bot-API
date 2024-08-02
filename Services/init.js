const puppeteer = require('puppeteer')

async function init() {
    const browser = await puppeteer.launch({
        timeout: 50_000,
        headless: false,
        userDataDir: process.env.CHROME_PATH,
        args: [
            "--profile-directory=Profile 3"
        ],
        defaultViewport: {
            height: 900,
            width: 1500
        }
    })

    const page = await browser.newPage()
    
    return {
        browser,
        page
    }
}

module.exports = init