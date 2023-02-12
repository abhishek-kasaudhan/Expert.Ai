const puppeteer = require('puppeteer');
jest.useRealTimers();
jest.setTimeout(60000);

describe('News page', () => {
  let browser, page;
  
  beforeEach(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
  });
  
  afterEach(async () => {
    await browser.close();
  });
  
  test('renders the news list', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('[data-testid="news-list-1"]') //checking the first element of the news list.
  });
  
  test('searches for news', async () => {
    await page.goto('http://localhost:3000');
    const searchInput = await page.waitForSelector('[data-testid="searchNews"]');
    await searchInput.type('Technology');
    await searchInput.press('Enter');
    await page.waitForSelector('[data-testid="news-list-1"]') //checking the first element of the news list.
  });
  
  test('click the news title', async () => {
    await page.goto('http://localhost:3000');
    await page.waitForSelector('[data-testid="news-list-1"]'); //checking the first element of the news list.
    await Promise.all([page.click('[data-testid="news-list-1"]'), page.waitForNavigation()]); //clicking the first element of the news list.
  });
});
