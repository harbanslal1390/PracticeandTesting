import { test, expect, chromium, Browser } from "@playwright/test";
test.skip("This is my first Test Case", async () => {
  test.slow()
  var browser: Browser = await chromium.launch();
  var browsercontext = await browser.newContext();
  var page = await browsercontext.newPage();
 // page.setViewportSize({width:1000,height:200})
  await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await page.locator("#input-email").fill("Test@gmail.com")
  //await page.fill("#input-email","Test@gmail.com")
  // await page.getByPlaceholder("E-mail Address").fill("Test@test.com")
  //await page.fill("input[name='password']","1234567")
  // await page.getByRole("button",{name:"Login"}).click()
  await page.waitForTimeout(2000)
  await browser.close(); 
});
