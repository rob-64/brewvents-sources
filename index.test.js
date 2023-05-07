const puppeteer = require("puppeteer");

test("Confirm text on page", async () => {
  const browser = await puppeteer.launch();
  try {
    const page = await browser.newPage();

    await page.goto("https://www.facebook.com/OozlefinchBeers/");

    // let pageHeader = await page.$("#pageTitle");
    // let pageHeaderValue = await pageHeader.evaluate((el) => el.textContent);

    // expect(pageHeaderValue).toContain("Welcome to the demo Web Page");

    // let pageParagraph = await page.$("#pageParagraph");
    // let pageParagraphValue = await pageParagraph.evaluate(
    //   (el) => el.textContent
    // );

    // expect(pageParagraphValue).toContain(
    //   "This is a sample text in a paragraph on the page"
    // );
  } finally {
    await browser.close();
  }
}, 120000);
