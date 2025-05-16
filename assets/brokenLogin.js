const { By, Builder } = require('selenium-webdriver');

(async function() {
  // Launch Chrome
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Go to login page
    await driver.get('https://demoqa.com/login');

    // ❌ BUG: Wrong ID for username!
    await driver.findElement(By.id('wrongUserName')).sendKeys('testuser');
    await driver.findElement(By.id('password')).sendKeys('Password123!');
    await driver.findElement(By.id('login')).click();

    // ❌ Missing: Check if login worked (URL should have "profile")
  } finally {
    await driver.quit(); // Close browser
  }
})();
