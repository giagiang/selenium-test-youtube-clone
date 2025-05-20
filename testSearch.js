const { Builder, By, until } = require("selenium-webdriver");
const assert = require("assert");
async function testSearch() {
  // launch the browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    //navigate to facebook login page
    await driver.get("https://project-youtube-clone-app.vercel.app/search/sport");
    // Select input elements and fill them out
    await driver.findElement(By.className("search-bar")).sendKeys("sport");
    // Find the search button and click it
    await driver.findElement(By.css("[data-testid='SearchIcon']")).click();
  
    // check that "Search Result for" is present in the page source
    await driver.wait(until.elementLocated(By.xpath("//*[contains(text(), 'Search Result for')]"), 5000), 10000);
    // check that div with data-testid videos-container is present
    await driver.wait(until.elementLocated(By.css("[data-testid='videos-container']")), 10000);

  } finally {
    await driver.quit();
  }
}
testSearch();