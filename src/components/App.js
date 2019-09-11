import React from 'react';
import './App.css';
import '../css/style.css';
import SnipList from './SnipList';
import SearchBar from './SearchBar';

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
      <SearchBar />
      <SnipList />
    </React.Fragment>
  );
}

export default App;
