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
        <div>
          <p>{this.props.restaurant.restaurant.name}</p>
        </div>
      )
    }
  }