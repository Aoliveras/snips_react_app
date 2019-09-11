import React, { Component } from 'react';

export default class Snip extends Component {
  render() {
    const { title, description, language, code } = this.props.snippet;
    return (
      <div className="snip">
        <div className="text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <pre>
          <code className="{language}">{code}</code>
        </pre>
      </div>
    );
  }
}
