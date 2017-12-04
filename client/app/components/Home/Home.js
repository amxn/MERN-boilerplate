import React, { Component } from 'react';
import 'whatwg-fetch';

class RestaurantView extends Component {
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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
      searchResults: []
    };

    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  search(query) {
    console.log('Searching for ' + query);
    fetch('/api/restaurants/search/' + query, { method: 'GET' })
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

  handleChange(event) {
    this.setState({searchQuery: event.target.value});
  }

  handleSubmit(event) {
    this.search(this.state.searchQuery);
    event.preventDefault();
  }

  render() {
    // console.log('Current restaurants:')
    // console.log(this.state.searchResults);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Search for restaurants:
            <input type="text" value={this.state.searchQuery} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {this.state.searchResults.map(result => {
          console.log('Search result:');
          console.log(result);
          return (<RestaurantView key={result.restaurant.name} restaurant={result} />);
        })}
      </div>
    );
  }
}

export default Home;
