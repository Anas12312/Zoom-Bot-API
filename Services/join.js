const delay = require("../Utils/delay")

async function join(browser, page, url) {
    await page.goto(url, {
        waitUntil: 'domcontentloaded'
    })
    
    await page.click(".mbTuDeF1")
    await page.click("h3 span a")
    await page.waitForNetworkIdle()
    await page.waitForSelector('iframe')
    const iframeElement = await page.$('iframe')
    console.log(iframeElement)
    await delay(5000)
    const innerDocument = await iframeElement.evaluate((i) => {
        return i.contentDocument
    })

    await page.goto(innerDocument.location.href, {
        waitUntil: "networkidle0"
    })
    console.log("found")
    await page.waitForSelector(".preview-join-button")
    await page.click(".preview-meeting-info button")
}

module.exports = join