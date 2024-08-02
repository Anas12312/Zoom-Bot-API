const acceptCookies = require("./acceptCookies");

const auth = async (browser, page) => {

    await page.goto('https://zoom.us/signin#/login')

    await acceptCookies(browser, page);

    const emailInput = await page.waitForSelector('input#email')
    const passwordInput = await page.waitForSelector('input#password')

    await emailInput.type('zizo_007@live.com', {delay: 100})
    await passwordInput.type('Zy@d789789', {delay: 100})

    const loginBtn = await page.waitForSelector('button#js_btn_login');

    await loginBtn.click({
        delay: 100
    })

    return

}

module.exports = auth