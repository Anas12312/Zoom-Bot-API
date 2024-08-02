const delay = require("../Utils/delay")

async function search(browser, page) {
    await delay(2000)
    await page.click(".-link--channel-name")
    console.log("anas")
}

module.exports = search