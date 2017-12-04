const fs = require('fs');
const path = require('path');

module.exports = (app) => {
  // API routes
  require('./api/counters')(app);
  require('./api/restaurants')(app);
};
