import React, { Component } from 'react';
import 'whatwg-fetch';
import RestaurantView from './RestaurantView';

class Restaurants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };
  }

  componentDidMount() {
    fetch('/api/restaurants/all/', { method: 'GET' })
    .then(res => res.json())
    .then(results => {
      console.log('Got results:');
      console.log(results);
      this.setState({
        searchResults: results
      });
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    // console.log('Current restaurants:')
    // console.log(this.state.searchResults);
    return (
      <div>
        {this.state.searchResults.map(result => {
          console.log('Search result:');
          console.log(result);
          return (<RestaurantView key={result.restaurant.name} restaurant={result} />);
        })}
      </div>
    );
  }
}

export default Restaurants;
