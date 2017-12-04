const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  restaurant: {
    id: String,
    name: String,
    url: String,
    location: {
      address: String,
      locality: String,
      city: String,
      city_id: Number,
      latitude: String,
      longitude: String,
      zipcode: String,
      country_id: Number,
      locality_verbose: String
    },
    cuisines: String,
    average_cost_for_two: Number,
    price_range: Number,
    user_rating: {
      aggregate_rating: String,
      votes: String
    },
    photos_url: String,
    menu_url: String,
    featured_image: String,
    has_online_delivery: Number,
    is_delivering_now: Number,
    has_table_booking: Number,
    events_url: String
  }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);
