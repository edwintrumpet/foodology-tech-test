const express = require('express');

const RestaurantsService = require('../services/restaurantsService');

const routes = (app) => {
  const router = express.Router();
  app.use('/', router);

  router.get('/', async (req, res) => {
    try {
      const restaurants = await RestaurantsService.getRestaurants();
      res.send(restaurants);
    } catch (err) {
      res.send('Express works!');
    }
  });
};

module.exports = routes;
