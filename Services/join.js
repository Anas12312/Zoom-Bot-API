const { timeout } = require("puppeteer")
const delay = require("../Utils/delay")

async function join(browser, page, url) {
    try {
        await page.goto(url, {
            waitUntil: 'domcontentloaded'
        })
        await page.waitForSelector(".mbTuDeF1", {
            timeout: 5000
        })
        await page.click(".mbTuDeF1")
        try {
            await page.waitForSelector("h3 span a", {
                timeout: 5000
            })
            await page.click("h3 span a")
        } catch (e) {
            await page.click(".mbTuDeF1")
            await page.waitForSelector("h3 span a", {
                timeout: 5000
            })
            await page.click("h3 span a")
        }
        await page.waitForNetworkIdle()
        await page.waitForSelector('iframe', {
            timeout: 5000
        })
        const iframeElement = await page.$('iframe')
        const innerDocument = await iframeElement.evaluate((i) => {
            return i.contentDocument
        })

        await page.goto(innerDocument.location.href, {
            waitUntil: "networkidle0"
        })
        console.log("found")
        try {
            await page.waitForSelector(".preview-join-button", {
                timeout: 5000
            })
            await page.click(".preview-meeting-info button")
        } catch (e) {
            throw e
        }
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}

module.exports = join