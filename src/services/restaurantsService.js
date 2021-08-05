const puppeteer = require('puppeteer');

const rappiURL = 'https://www.rappi.com.co/restaurantes';

class RestaurantsService {
  static async getRestaurants() {
    const args = [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ];
    const options = {
      args,
    };
    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.goto(rappiURL);
    // eslint-disable-next-line no-undef
    const text = await page.evaluate(() => document.getElementsByTagName('rappi-mf-address')[0].innerText);
    console.log(text);
    return text;
  }
}

module.exports = RestaurantsService;
