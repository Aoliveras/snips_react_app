// TODO:
// 1. request data from server
// 2. hold data in state so that it will be passed down to our Snips.
// 3. render snips.

import React, { Component } from 'react';
import axios from 'axios';
import Snip from './Snip';

// dummy code
const snippetData = [
  {
    id: 3,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declare a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 4,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declare a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 5,
    code: 'const america = 1776',
    title: 'freedom',
    description: 'I declare a const',
    favorites: 0,
    author: null,
    language: null,
  },
  {
    id: 6,
    code: "console.log('Hello World!')",
    title: 'console.js',
    description: 'Hello world app',
    favorites: 0,
    author: 'Ayana',
    language: 'JavaScript',
  },
  {
    id: 7,
    code: "console.log('Hello World!')",
    title: 'console.js',
    description: 'Hello world app',
    favorites: 0,
    author: 'A-Dawg!',
    language: 'JavaScript',
  },
  {
    id: 2,
    code: "// Welcome to Your Mom's Place!!",
    title: 'single-line.js',
    description: 'This is how you do a single line comment in JS',
    favorites: 0,
    author: 'yourmutha',
    language: 'javascript',
  },
];

export default class SnipList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      snippets: [],
    };
  }

  async componentDidMount() {
    console.log('SnipList mounted!!! Huzaaah!!!');
    const { data } = await axios.get('http://localhost:5000/api/snippets');
    console.log(data);
    this.setState({
      snippets: data,
    });
  }
  render() {
    return (
      <section id="snippets">
        {this.state.snippets.map(snippet => (
          <Snip key={snippet.id} snippet={snippet} />
        ))}
      </section>
    );
  }
}
