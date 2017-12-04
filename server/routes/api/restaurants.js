const Restaurant = require('../../models/Restaurant');

module.exports = (app) => {
  app.get('/api/restaurants/:name', function (req, res, next) {
    //query = '.*' + req.params.name + '.*';
    query = req.params.name.toLowerCase();
    console.log('Searching with query ' + query);
    Restaurant.find(
      //{
      //  "restaurant": {
      //    //"name": { $regex: query, $options: 'i' }
      //    "name": query
      //  }
      //},
      {},
      function (err, restaurants) {
        if (err) {
          console.log('ERROR: ' + err)
          next(err);
        } else {
          results = []
          restaurants.forEach(function(restaurant) {
            console.log(restaurant);
            if (restaurant.restaurant.name.toLowerCase().indexOf(query) !== -1) {
              results.push(restaurant);
            }
          });
          console.log(results);
          res.json(results);
        }
      });
  });
};
