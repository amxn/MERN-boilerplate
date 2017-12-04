import React, { Component } from 'react';

export default class RestaurantView extends Component {
    constructor(props) {
      super(props);
      console.log('Constructed with restaurant:');
      console.log(this.props.restaurant);
    }
  
    render() {
      console.log('Displaying restaurant:');
      console.log(this.props.restaurant);
      return (
        <div className="container">
          <h2>{this.props.restaurant.restaurant.name}</h2>
          <h2>{this.props.restaurant.restaurant.location.address}</h2>
          <h2><span>Cuisines:</span>{this.props.restaurant.restaurant.cuisines}</h2>
          <p><img src={this.props.restaurant.restaurant.featured_image}/></p>
        </div>
      )
    }
  }