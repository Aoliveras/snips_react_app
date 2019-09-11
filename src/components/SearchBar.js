import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
  }

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({
      searchText: value,
    });
  };

  render() {
    const { searchText } = this.state;
    return (
      <form id="search">
        <label htmlFor="search-text">
          <span className="icon">🔎</span>
        </label>
        <input
          type="text"
          name="search-text"
          id="search-text"
          value={searchText}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
