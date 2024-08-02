const acceptCookies = async (browser, page) => {

    try {
        const closeBtn = await page.waitForSelector('div#onetrust-close-btn-container button')

        await closeBtn.click({
            delay: 100
        })
    }
    catch(e) {
        return
    }

}

module.exports = acceptCookies