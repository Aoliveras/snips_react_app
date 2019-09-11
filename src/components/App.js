import React from 'react';
import './App.css';
import '../css/style.css';
import Snip from './Snip';

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

function App() {
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
      <form id="search">
        <label htmlFor="search-text">
          <span className="icon">🔎</span>
        </label>
        <input type="text" name="search-text" id="search-text" />
        <button type="submit">Search</button>
      </form>
      <section id="snippets">
        {snippetData.map(snippet => (
          <Snip snippet={snippet} />
        ))}
      </section>
    </React.Fragment>
  );
}

export default App;
