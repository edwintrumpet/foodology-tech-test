/* eslint-disable no-undef */
const puppeteer = require('puppeteer');

const rappiURL = 'https://www.rappi.com.co/restaurantes';
const latitude = 3.4242814233739614;
const longitude = -76.54170365914733;

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
    await page.setGeolocation({
      latitude,
      longitude,
    });
    await page.goto(rappiURL);

    // Set location on page
    await page.click(document.getElementsByTagName('rappi-mf-address')[0]
      .children[1]
      .children[0]
      .children[1]);

    await page.click(document.getElementsByTagName('rappi-mf-address')[0]
      .children[1]
      .children[1]
      .children[0]);

    await page.click(document.getElementsByTagName('rappi-mf-modal-address')[0]
      .children[1]
      .children[0]
      .children[1]
      .children[2]
      .children[0]);

    return 'response';
  }
}

module.exports = RestaurantsService;
