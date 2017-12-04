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
          <p>{this.props.restaurant.restaurant.name}</p>
          <p>{this.props.restaurant.restaurant.location.address}</p>
          <p>{this.props.restaurant.restaurant.cuisines}</p>
          <p><img src={this.props.restaurant.restaurant.featured_image}/></p>
        </div>
      )
    }
  }