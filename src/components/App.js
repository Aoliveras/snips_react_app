import React, { Component } from 'react';
import './App.css';
import '../css/style.css';
import axios from 'axios';
import SnipList from './SnipList';
import SearchBar from './SearchBar';
import SnippetForm from './SnippetForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snippets: [],
    };
  }

  async componentDidMount() {
    console.log('App mounted!!! Huzaaah!!!');
    const { data } = await axios.get('http://localhost:5000/api/snippets');
    console.log(data);
    this.setState({
      snippets: data,
    });
  }

  fetchSnippets = async searchText => {
    // fetch snippets from db
    const { data: snippets } = await axios.get(
      'http://localhost:5000/api/snippets'
    );

    // inner function
    const matchStr = (str, toMatch) =>
      str.toLowerCase().includes(toMatch.toLowerCase());

    // filter them
    const filteredSnips = snippets.filter(
      snippet =>
        matchStr(snippet.title || '', searchText) ||
        matchStr(snippet.description || '', searchText) ||
        matchStr(snippet.code || '', searchText) ||
        matchStr(snippet.language || '', searchText)
    );

    // set state
    this.setState({
      snippets: filteredSnips,
    });
  };

  insertSnippet = snippet => {
    console.log(snippet);
    axios.post('http://localhost:5000/api/snippets');
    const { data } = axios.get('http://localhost:5000/api/snippets');
    console.log(data);

    this.setState({
      snippets: data,
    });
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="snippets.html">Snippets</a>
              </li>
              <li>
                <a href="account.html"> Account</a>
              </li>
              <li>
                <a href="#competitors">Competitors</a>
              </li>
            </ul>
          </nav>
        </header>
        <SearchBar onSearch={this.fetchSnippets} />
        <SnippetForm onSubmit={this.insertSnippet} />
        <SnipList snippets={this.state.snippets} />
      </React.Fragment>
    );
  }
}

export default App;
