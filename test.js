const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:8080'); // Your local server
        await driver.wait(until.titleIs('Your Page Title'), 1000);
        // More tests...
    } finally {
        await driver.quit();
    }
})();
